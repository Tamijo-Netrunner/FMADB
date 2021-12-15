<!--Search Function-->

<?php
//... checks for what display style was requested...
if(isset($_GET['as']))
{
	$as = $_GET['as'];
}

//... and if none is sent (somehow) sets it to checklist.
else 
{
	$as = "checklistSearch";
}
		
//Connect to database
$servername = "localhost";
$username = "root";
$password = "usbw";
$database_name = "fullmetal alchemist card data";

/* Online Db credentials (None functional)
$servername = "fdb30.awardspace.net";
$username = "3769359_fma";
$password = "test1234";
$database_name = "3769359_fma";
*/

$connection = mysqli_connect($servername, $username, $password, $database_name);

if (!$connection){die("Connection failed: ".mysqli_connect_error());}

//Creates a variable to tell the search command to fire, and also ensure "AND" is inserted correctly into the search parser (multi-purpose)
$sql_statement = "SELECT * FROM cards WHERE ";
$prevTerm = 0;

//Get search critera

//Gets card name (q) search parameter
//Checks if card name has data and sets variable to it if it does
if (isset($_GET['q']))
{
	$cardNameSlashless = $_GET['q'];
	$cardName = addslashes($cardNameSlashless);
	
	//checks to see if that data has a value or not.
	if ($cardName != "")
	{
		//Separates out searches with a comma into multiple terms
		$separatedCardName = explode(', ', $cardName);
		
		//Counts how many comma separated terms there are
		$countNames = count($separatedCardName);
		
		//If there is only one term (no comma)
		if($countNames == 1)
		{
			//Sets the search term variable as normal, searching both names and subnames for the requested term
			$sql_statement .= "(Name LIKE '%$cardName%' OR Subname LIKE '%$cardName%')";

			//Sets the multi-purpose search variable to 1 to be read by other search terms and by the search command
			$prevTerm = 1;
		}
		
		//If there are 2 terms (one comma)
		if($countNames == 2)
		{
			//Searches names for the first term and subnames for the second term
			$sql_statement .= "(Name LIKE '%$separatedCardName[0]%')";
			$sql_statement .= " AND (Subname LIKE '%$separatedCardName[1]%')";

			//Sets the multi-purpose search variable to 1 to be read by other search terms and by the search command
			$prevTerm = 1;
		}
	}
}

//The above is repeated for each following section
//Gets card text (x) search parameter
if(isset($_GET['x']))
{
	$cardTextSlashless = $_GET['x'];
	$cardText = addslashes($cardTextSlashless);
	$explodedCardText = explode(" ", $cardText);
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

//Gets subtype (p) search parameter
if(isset($_GET['p']))
{
	$cardSubtype = $_GET['p']; 
	$cardSubtype = addslashes($cardSubtype);
	if ($cardSubtype != "")
	{
		if ($prevTerm == 1){$sql_statement .= " AND `Subtype` LIKE '%$cardSubtype%'";} 
		elseif ($prevTerm == 0)
		{
			$sql_statement .= "`Subtype` LIKE '%$cardSubtype%'";
			$prevTerm = 1;
		}
	}
}

//Gets faction (f) search parameter
if(isset($_GET['f']))
{
	$cardFaction = $_GET['f'];
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
//Pack set to exact match for promo search to excluse already listed promos
if(isset($_GET['e']))
{
	$cardPack = $_GET['e'];
	if ($cardPack != "")
	{
		if ($prevTerm == 1){$sql_statement .= " AND `Pack` LIKE '$cardPack'";}
		elseif ($prevTerm == 0)
		{
			$sql_statement .= "`Pack` LIKE '$cardPack'";
			$prevTerm = 1;
		}
	}
}


//Gets rarity (r) search parameter
//Rarity set to exact match to solve Uncommon appearing in Common search
if(isset($_GET['r']))
{
	$cardRarity = $_GET['r'];
	if ($cardRarity != "")
	{
		if ($prevTerm == 1){$sql_statement .= " AND `Rarity` LIKE '$cardRarity'";} 
		elseif ($prevTerm == 0)
		{
			$sql_statement .= "`Rarity` LIKE '$cardRarity'";
			$prevTerm = 1;
		}
	}
}


//Gets rarity (r) search parameter
if(isset($_GET['v']))
{
	$cardFlavor = $_GET['v'];
	if ($cardFlavor != "")
	{
		if ($prevTerm == 1){$sql_statement .= " AND `Flavor` LIKE '%$cardFlavor%'";} 
		elseif ($prevTerm == 0)
		{
			$sql_statement .= "`Flavor` LIKE '%$cardFlavor%'";
			$prevTerm = 1;
		}
	}
}

//////////////////// TEST OUTPUT ////////////////////
//include "testOutput.php";


//If there are no search terms, displays an error page [Error page currently just "0 results" page
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