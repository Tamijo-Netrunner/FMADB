<!--Search Function-->

<?php
//... checks for what display style was requested...
if(isset($_GET['as'])){$as = $_GET['as'];}

//... and if none is sent sets it to checklist.
else {$as = "checklistSearch";}

if (!$connection){die("Connection failed: ".mysqli_connect_error());}

//Creates a variable to tell the search command to fire, and also ensure "AND" is inserted correctly into the search parser (multi-purpose)
$sql_statement = "SELECT * FROM cards WHERE ";
$prevTerm = 0;

//Get search critera

//Gets card name (q) search parameter
//Checks if card name has data and sets variable to it if it does
if(isset($_GET['q']))
{
	$cardNameSlashless = $_GET['q'];
	if($cardNameSlashless != "")
	{
		$cardName = addslashes($cardNameSlashless);
		$separatedCardName = explode(", ",$cardName);
		$countNames = count($separatedCardName);
		if($countNames == 1)
		{
			$combinedCardName = implode(" ",$separatedCardName);
			$explodedCardName = explode(" ",$combinedCardName);
			if(isset($_GET['nameComparison']))
			{
				if($_GET['nameComparison'] == "All")
				{
					$implodedCardName = implode("%' AND `Name` LIKE '%",$explodedCardName);
					$implodedCardSubname = implode("%' AND `Subname` LIKE '%",$explodedCardName);
					if($prevTerm == 1){$sql_statement .= "AND ((`Name` LIKE '%".$implodedCardName."%')";}
					if($prevTerm == 0){$sql_statement .= "((`Name` LIKE '%".$implodedCardName."%')";}
					$sql_statement .= " OR (`Subname` LIKE '%".$implodedCardSubname."%'))";
					$prevTerm = 1;
				}
				if($_GET['nameComparison'] == "Any")
				{
					$implodedCardName = implode("%' OR `Name` LIKE '%",$explodedCardName);
					$implodedCardSubname = implode("%' OR `Subname` LIKE '%",$explodedCardName);
					if($prevTerm == 1){$sql_statement .= "AND ((`Name` LIKE '%".$implodedCardName."%')";}
					if($prevTerm == 0){$sql_statement .= "((`Name` LIKE '%".$implodedCardName."%')";}
					$sql_statement .= " OR (`Subname` LIKE '%".$implodedCardSubname."%'))";
					$prevTerm = 1;
				}
				if($_GET['nameComparison'] == "Exact")
				{
					$implodedCardName = implode(" ",$explodedCardName);
					$implodedCardSubname = implode(" ",$explodedCardName);
					if($prevTerm == 1){$sql_statement .= "AND ((`Name` LIKE '%".$implodedCardName."%')";}
					if($prevTerm == 0){$sql_statement .= "((`Name` LIKE '%".$implodedCardName."%')";}
					$sql_statement .= " OR (`Subname` LIKE '%".$implodedCardSubname."%'))";
					$prevTerm = 1;
				}
			}
			else
			{
				$implodedCardName = implode("%' AND `Name` LIKE '%",$explodedCardName);
				$implodedCardSubname = implode("%' AND `Subname` LIKE '%",$explodedCardName);
				if($prevTerm == 1){$sql_statement .= "AND ((`Name` LIKE '%".$implodedCardName."%')";}
				if($prevTerm == 0){$sql_statement .= "((`Name` LIKE '%".$implodedCardName."%')";}
				$sql_statement .= " OR (`Subname` LIKE '%".$implodedCardSubname."%'))";
				$prevTerm = 1;
			}
		}
		if($countNames == 2)
		{
			$cardTitle = $separatedCardName[0];
			$cardSubname = $separatedCardName[1];
			$explodedCardName = explode(" ",$cardTitle);
			$explodedCardSubname = explode(" ",$cardSubname);
			if(isset($_GET['nameComparison']))
			{
				if($_GET['nameComparison'] == "All")
				{
					$implodedCardName = implode("%' AND `Name` LIKE '%",$explodedCardName);
					$implodedCardSubname = implode("%' AND `Subname` LIKE '%",$explodedCardSubname);
					if($prevTerm == 1){$sql_statement .= "AND ((`Name` LIKE '%".$implodedCardName."%')";}
					if($prevTerm == 0){$sql_statement .= "((`Name` LIKE '%".$implodedCardName."%')";}
					$sql_statement .= " AND (`Subname` LIKE '%".$implodedCardSubname."%'))";
					$prevTerm = 1;
				}
				if($_GET['nameComparison'] == "Any")
				{
					$implodedCardName = implode("%' OR `Name` LIKE '%",$explodedCardName);
					$implodedCardSubname = implode("%' OR `Subname` LIKE '%",$explodedCardSubname);
					if($prevTerm == 1){$sql_statement .= "AND ((`Name` LIKE '%".$implodedCardName."%')";}
					if($prevTerm == 0){$sql_statement .= "((`Name` LIKE '%".$implodedCardName."%')";}
					$sql_statement .= " OR (`Subname` LIKE '%".$implodedCardSubname."%'))";
					$prevTerm = 1;
				}
				if($_GET['nameComparison'] == "Exact")
				{
					$implodedCardName = implode(" ",$explodedCardName);
					$implodedCardSubname = implode(" ",$explodedCardSubname);
					if($prevTerm == 1){$sql_statement .= "AND ((`Name` LIKE '".$implodedCardName."')";}
					if($prevTerm == 0){$sql_statement .= "((`Name` LIKE '%".$implodedCardName."%')";}
					$sql_statement .= " AND (`Subname` LIKE '%".$implodedCardSubname."%'))";
					$prevTerm = 1;
				}
			}
			else
			{
				$implodedCardName = implode("%' AND `Name` LIKE '%",$explodedCardName);
				$implodedCardSubname = implode("%' AND `Subname` LIKE '%",$explodedCardSubname);
				if($prevTerm == 1){$sql_statement .= "AND ((`Name` LIKE '%".$implodedCardName."%')";}
				if($prevTerm == 0){$sql_statement .= "((`Name` LIKE '%".$implodedCardName."%')";}
				$sql_statement .= " AND (`Subname` LIKE '%".$implodedCardSubname."%'))";
				$prevTerm = 1;
			}
		}
	}
}
else $q = "";

//The above is repeated for each following section
//Gets card text (x) search parameter
if(isset($_GET['x']))
{
	$cardTextSlashless = $_GET['x'];
	$cardText = addslashes($cardTextSlashless);
	$explodedCardText = explode(" ", $cardText);
	if($_GET['textComparison'] == "All")
	{
		$implodedCardText = implode("%' AND `Ability` LIKE '%", $explodedCardText);
		if ($implodedCardText != "")
		{
			//Checks to see if a previous term has been used to set "AND" correctly
			if ($prevTerm == 1){$sql_statement .= " AND (`Ability` LIKE '%$implodedCardText%')";}

			//If previous term has not been used, does not use "AND"
			elseif ($prevTerm == 0)
			{
				$sql_statement .= "(`Ability` LIKE '%$implodedCardText%')";
				$prevTerm = 1;
			}
		}
	}

	if($_GET['textComparison'] == "Any")
	{
		$implodedCardText = implode("%' OR `Ability` LIKE '%", $explodedCardText);
		if ($implodedCardText != "")
		{
			//Checks to see if a previous term has been used to set "AND" correctly
			if ($prevTerm == 1){$sql_statement .= " AND (`Ability` LIKE '%$implodedCardText%')";}

			//If previous term has not been used, does not use "AND"
			elseif ($prevTerm == 0)
			{
				$sql_statement .= "(`Ability` LIKE '%$implodedCardText%')";
				$prevTerm = 1;
			}
		}
	}

	if($_GET['textComparison'] == "Exact")
	{
		$implodedCardText = implode(" ", $explodedCardText);
		if ($implodedCardText != "")
		{
			//Checks to see if a previous term has been used to set "AND" correctly
			if ($prevTerm == 1){$sql_statement .= " AND (`Ability` LIKE '%$implodedCardText%')";}

			//If previous term has not been used, does not use "AND"
			elseif ($prevTerm == 0)
			{
				$sql_statement .= "(`Ability` LIKE '%$implodedCardText%')";
				$prevTerm = 1;
			}
		}
	}
}

//Gets card type (t) search parameter
if(isset($_GET['t']))
{
	$cardType = $_GET['t'];
	if(isset($_GET['typeNot']))
	{
		$typeNot = $_GET['typeNot'];
		if($typeNot == "Not")
		{
			$implodedCardType = implode("' AND `Card_type` NOT LIKE '", $cardType);
			if ($implodedCardType != "")
			{
				if ($prevTerm == 1){$sql_statement .= " AND (`Card_type` NOT LIKE '$implodedCardType')";}
				elseif ($prevTerm == 0)
				{
					$sql_statement .= "(`Card_type` NOT LIKE '$implodedCardType')";
					$prevTerm = 1;
				}
			}
		}
	}
	else
	{
		$implodedCardType = implode("' OR `Card_type` LIKE '", $cardType);
		if ($implodedCardType != "")
		{
			if ($prevTerm == 1){$sql_statement .= " AND (`Card_type` LIKE '$implodedCardType')";}
			elseif ($prevTerm == 0)
			{
				$sql_statement .= "(`Card_type` LIKE '$implodedCardType')";
				$prevTerm = 1;
			}
		}
	}
}

//Gets faction (f) search parameter
if(isset($_GET['f']))
{
	$cardFaction = $_GET['f'];
	if(isset($_GET['factionNot']))
	{
		$factionNot = $_GET['factionNot'];
		if($factionNot == "Not")
		{
			$implodedCardFaction = implode("' AND `Faction` NOT LIKE '", $cardFaction);
			if ($implodedCardFaction != "")
			{
				if ($prevTerm == 1){$sql_statement .= " AND (`Faction` NOT LIKE '$implodedCardFaction')";}
				elseif ($prevTerm == 0)
				{
					$sql_statement .= "`Faction` NOT LIKE '$implodedCardFaction'";
					$prevTerm = 1;
				}
			}
		}
	}
	else
	{
		$implodedCardFaction = implode("' OR `Faction` LIKE '", $cardFaction);
		if ($implodedCardFaction != "")
		{
			if ($prevTerm == 1){$sql_statement .= " AND (`Faction` LIKE '$implodedCardFaction')";}
			elseif ($prevTerm == 0)
			{
				$sql_statement .= "`Faction` LIKE '$implodedCardFaction'";
				$prevTerm = 1;
			}
		}
	}
}


//Gets pack (e) search parameter
if(isset($_GET['p']))
{
	$cardSubtype = $_GET['p'];

	//Checks comparison setting and implodes the array accordingly
	if($_GET['subtypeComparison'] == "Any"){$implodedCardSubtype = implode("%' OR `Subtype` LIKE '%", $cardSubtype);}
	if($_GET['subtypeComparison'] == "All"){$implodedCardSubtype = implode("%' AND `Subtype` LIKE '%", $cardSubtype);}

	//Checks for '-' and inserts "NOT LIKE" accordingly
	$implodedCardSubtype = str_replace("-","NOT LIKE '%",$implodedCardSubtype);
	$implodedCardSubtype = str_replace("LIKE 'NOT","NOT",$implodedCardSubtype);
	if ($implodedCardSubtype != "")
	{
		if ($prevTerm == 1)
		{
			$sql_statement .= " AND (`Subtype` LIKE '%$implodedCardSubtype%')";
			$sql_statement = str_replace("LIKE '%NOT","NOT",$sql_statement);
			$sql_statement = str_replace("OR `Subtype` NOT LIKE ","AND `Subtype` NOT LIKE ",$sql_statement);
		}
		elseif ($prevTerm == 0)
		{
			$sql_statement .= "(`Subtype` LIKE '%$implodedCardSubtype%')";
			$sql_statement = str_replace("LIKE '%NOT","NOT",$sql_statement);
			$sql_statement = str_replace("OR `Subtype` NOT LIKE ","AND `Subtype` NOT LIKE %",$sql_statement);
			$prevTerm = 1;
		}
	}
}

//Gets faction (f) search parameter
if(isset($_GET['f']))
{
	$cardFaction = $_GET['f'];
	if(isset($_GET['factionNot']))
	{
		$factionNot = $_GET['factionNot'];
		if($factionNot == "Not")
		{
			$implodedCardFaction = implode("' AND `Faction` NOT LIKE '", $cardFaction);
			if ($implodedCardFaction != "")
			{
				if ($prevTerm == 1){$sql_statement .= " AND (`Faction` NOT LIKE '$implodedCardFaction')";}
				elseif ($prevTerm == 0)
				{
					$sql_statement .= "`Faction` NOT LIKE '$implodedCardFaction'";
					$prevTerm = 1;
				}
			}
		}
	}
	else
	{
		$implodedCardFaction = implode("' OR `Faction` LIKE '", $cardFaction);
		if ($implodedCardFaction != "")
		{
			if ($prevTerm == 1){$sql_statement .= " AND (`Faction` LIKE '$implodedCardFaction')";}
			elseif ($prevTerm == 0)
			{
				$sql_statement .= "`Faction` LIKE '$implodedCardFaction'";
				$prevTerm = 1;
			}
		}
	}
}


//Gets first stat (stat_1) search parameter
if(isset($_GET['stat_1_value']))
{
	$cardStat_1_Value = $_GET['stat_1_value'];
	if ($cardStat_1_Value != "")
	{
		$cardStat_1 = $_GET['stat_1'];
		$cardStat_1_Mode = $_GET['stat_1_mode'];
		if ($prevTerm == 1){$sql_statement .= " AND `$cardStat_1` $cardStat_1_Mode$cardStat_1_Value";}
		elseif ($prevTerm == 0)
		{
			$sql_statement .= "`$cardStat_1` $cardStat_1_Mode$cardStat_1_Value";
			$prevTerm = 1;
		}
	}
}


//Gets second stat (stat_2) search parameter
if(isset($_GET['stat_2_value']))
{
	$cardStat_2_Value = $_GET['stat_2_value'];
	if ($cardStat_2_Value != "")
	{
		$cardStat_2 = $_GET['stat_2'];
		$cardStat_2_Mode = $_GET['stat_2_mode'];
		if ($prevTerm == 1){$sql_statement .= " AND `$cardStat_2` $cardStat_2_Mode$cardStat_2_Value";}
		elseif ($prevTerm == 0)
		{
			$sql_statement .= "`$cardStat_2` $cardStat_2_Mode$cardStat_2_Value";
			$prevTerm = 1;
		}
	}
}


//Gets Strength search parameter
if(isset($_GET['s']))
{
	$cardStrength = $_GET['s'];
	if ($cardStrength != "")
	{
		$cardStrength_Mode = $_GET['strength_mode'];
		if ($prevTerm == 1){$sql_statement .= " AND `Strength` $cardStrength_Mode$cardStrength";}
		elseif ($prevTerm == 0)
		{
			$sql_statement .= "`Strength` $cardStrength_Mode$cardStrength";
			$prevTerm = 1;
		}
	}
}


//Gets Wits search parameter
if(isset($_GET['w']))
{
	$cardWits = $_GET['w'];
	if ($cardWits != ""){
		$cardWits_Mode = $_GET['wits_mode'];
		if ($prevTerm == 1){$sql_statement .= " AND `Wits` $cardWits_Mode$cardWits";}
		elseif ($prevTerm == 0)
		{
			$sql_statement .= "`Wits` $cardWits_Mode$cardWits";
			$prevTerm = 1;
		}
	}
}

//Gets Alchemy search parameter
if(isset($_GET['a']))
{
	$cardAlchemy = $_GET['a'];
	if ($cardAlchemy != "")
	{
		$cardAlchemy_Mode = $_GET['alchemy_mode'];
		if ($prevTerm == 1){$sql_statement .= " AND `Alchemy` $cardAlchemy_Mode$cardAlchemy";}
		elseif ($prevTerm == 0)
		{
			$sql_statement .= "`Alchemy` $cardAlchemy_Mode$cardAlchemy";
			$prevTerm = 1;
		}
	}
}


//Gets pack (e) search parameter
if(isset($_GET['e']))
{
	$cardPack = $_GET['e'];
	$implodedCardPack = implode("' OR `Pack` LIKE '", $cardPack);
	$implodedCardPack = str_replace("-","NOT LIKE '",$implodedCardPack);
	$implodedCardPack = str_replace("LIKE 'NOT","NOT",$implodedCardPack);
	if ($implodedCardPack != "")
	{
		if ($prevTerm == 1)
		{
			$sql_statement .= " AND (`Pack` LIKE '$implodedCardPack')";
			$sql_statement = str_replace("LIKE 'NOT","NOT",$sql_statement);
			$sql_statement = str_replace("OR `Pack` NOT LIKE","AND `Pack` NOT LIKE",$sql_statement);
		}
		elseif ($prevTerm == 0)
		{
			$sql_statement .= "(`Pack` LIKE '$implodedCardPack')";
			$sql_statement = str_replace("LIKE 'NOT","NOT",$sql_statement);
			$sql_statement = str_replace("OR `Pack` NOT LIKE","AND `Pack` NOT LIKE",$sql_statement);
			$prevTerm = 1;
		}
	}
}


//Gets rarity (r) search parameter
if(isset($_GET['r']))
{
	$cardRarity = $_GET['r'];
	$implodedCardRarity = implode("' OR `Rarity` LIKE '", $cardRarity);
	$implodedCardRarity = str_replace("-","NOT LIKE '",$implodedCardRarity);
	$implodedCardRarity = str_replace("LIKE 'NOT","NOT",$implodedCardRarity);
	if ($implodedCardRarity != "")
	{
		if ($prevTerm == 1)
		{
			$sql_statement .= " AND (`Rarity` LIKE '$implodedCardRarity')";
			$sql_statement = str_replace("LIKE 'NOT","NOT",$sql_statement);
			$sql_statement = str_replace("OR `Rarity` NOT LIKE","AND `Rarity` NOT LIKE",$sql_statement);
		}
		elseif ($prevTerm == 0)
		{
			$sql_statement .= "(`Rarity` LIKE '$implodedCardRarity')";
			$sql_statement = str_replace("LIKE 'NOT","NOT",$sql_statement);
			$sql_statement = str_replace("OR `Rarity` NOT LIKE","AND `Rarity` NOT LIKE",$sql_statement);
			$prevTerm = 1;
		}
	}
}

//Gets flavor (v) search parameter
if(isset($_GET['v']))
{
	$cardFlavorSlashless = $_GET['v'];
	$cardFlavor = addslashes($cardFlavorSlashless);
	$explodedCardFlavor = explode(" ", $cardFlavor);
	if($_GET['flavorComparison'] == "Any")
	{
		$implodedCardFlavor = implode("%' OR `Flavor` LIKE '%", $explodedCardFlavor);
		if ($implodedCardFlavor != "")
		{
			if ($prevTerm == 1){$sql_statement .= " AND (`Flavor` LIKE '%$implodedCardFlavor%')";}
			elseif ($prevTerm == 0)
			{
				$sql_statement .= "`Flavor` LIKE '%$implodedCardFlavor%'";
				$prevTerm = 1;
			}
		}
	}
	if($_GET['flavorComparison'] == "All")
	{
		$implodedCardFlavor = implode("%' AND `Flavor` LIKE '%", $explodedCardFlavor);
		if($implodedCardFlavor !="")
		{
			if ($prevTerm == 1){$sql_statement .= " AND (`Flavor` LIKE '%$implodedCardFlavor%')";}
			elseif ($prevTerm == 0)
			{
				$sql_statement .= "(`Flavor` LIKE '%$implodedCardFlavor%')";
				$prevTerm = 1;
			}
		}
	}
	if($_GET['flavorComparison'] == "Exact")
	{
		$implodedCardFlavor = implode(" ", $explodedCardFlavor);
		if ($implodedCardFlavor != "")
		{
			if ($prevTerm == 1){$sql_statement .= " AND (`Flavor` LIKE '%$implodedCardFlavor%')";}
			elseif ($prevTerm == 0)
			{
				$sql_statement .= "(`Flavor` LIKE '%$implodedCardFlavor%')";
				$prevTerm = 1;
			}
		}
	}
}


//If there are no search terms, displays an error page [Error page currently just "0 results" page]
 if ($prevTerm == 0)
{
	header("Location: failedSearch.php");
	exit();
}

//Checks if there are any results
if ($result = mysqli_query($connection, $sql_statement))
{
	//If there are no results, returns failedSearch page
	if (mysqli_affected_rows($connection) == 0)
	{
		header("Location: failedSearch.php");
		exit();
	}

	//If there is only 1 result, returns the page for that card.
	if (mysqli_affected_rows($connection) == 1)
	{
		header("Location: card.php?Card_code=".mysqli_fetch_assoc($result)['Card_code']);
		exit();
	}

	//If there are multiple results...
	else
	{
		//Then displays those search results.
		include $as.".php";
		exit();
	}
}