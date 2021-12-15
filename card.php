<html>

<?php

//Set head bar q to nothing
//$q = '';

$cardCode = $_GET['Card_code'];

//Setup header bar and css layout
include "html/head.html";
include "html/Skip_links.html";
include "html/header.html";

//Connect to database
$servername = "localhost";
$username = "root";
$password = "usbw";
$database_name = "fullmetal alchemist card data";

$connection = mysqli_connect($servername, $username, $password, $database_name);

if (!$connection){die("Connection failed: ".mysqli_connect_error());}

$sql_statement = "SELECT * FROM `cards` WHERE `Card_code` LIKE '$cardCode';";
if ($result = mysqli_query($connection, $sql_statement))
{
?>

<body>

<div id="main" class="main" role="main">

<?php
	//Sets up variables for the page
	while ($row = mysqli_fetch_assoc($result))
		{
			$cardCode = $row['Card_code'];
			$cardNumber = $row['Code'];
			$cardPack = $row['Pack'];
			$cardRarity = $row['Rarity'];
			$cardType = $row['Card_type'];
			$cardLimit = $row['Deck_limit'];
			$cardName = $row['Name'];
			$cardSubname = $row['Subname'];
			$cardFaction = $row['Faction'];
			$cardLevel = $row['Level'];
			$cardCommand = $row['Command'];
			$cardCost = $row['Cost'];
			$cardPoints = $row['Points'];
			$cardSubtype = $row['Subtype'];
			$cardStrength = $row['Strength'];
			$cardWits = $row['Wits'];
			$cardAlchemy = $row['Alchemy'];
			$cardPhase = $row['Phase'];
			$cardAttribute = $row['Attribute'];
			$cardBattle = $row['Battle'];
			$cardGoal = $row['Goal'];
			$cardGate = $row['Gate'];
			$cardText = $row['Ability'];
			$cardFlavor = $row['Flavor'];
			$cardPrintings = $row['Other_printings'];
			$cardImagePath = "https://f000.backblazeb2.com/file/FullmetalAlchemist-Database/FMA".$cardNumber.".jpg";
?>

	<div class="card-profile">
		<div class="inner-flex">
			<div class="card-image">
				<div class="card-image-front">
					<img class="card c15 border-black" alt="<?php echo $cardName; if ($row['Subname'] != ""){echo ", ".$row['Subname'];}?>" title="<?php echo $cardName; if ($row['Subname'] != ""){echo ", ".$row['Subname'];}?>" src="<?php echo $cardImagePath ?>">
				</div>
			</div>
			
			<div class="card-text">
				<h1 class="card-text-title">
				<?php echo $cardName; if ($row['Subname'] != ""){echo ", ".$row['Subname'];}?>
					<span class="card-text-mana-cost">
						<?php 
						if ($row['Command'] != "0"){echo $row['Command'];}
						if ($row['Cost'] != "0"){echo $row['Cost'];}
						if ($row['Points'] != "0"){echo $row['Points'];}						
						?>
					</span>
					<br>
					<em></em>
				</h1>
				<p class="card-text-type-line"><?php if($cardType == "Event"){echo $cardAttribute." ";} echo $cardType; if ($row['Subtype'] != ""){echo " - ".$row['Subtype'];}?></p>
<?php			if ($cardType == "Location"){ ?>
				<div class="card-text-stats"><?php echo "Battle: <strong>".$cardBattle."</strong> - Goal: <strong>".$cardGoal."</strong>" ?></div>
<?php			} 
				elseif ($cardType == "Leader" || $row['Card_type'] == "Ally" || $row['Card_type'] == "Attachment"){ ?>
				<div class="card-text-stats"><?php echo "Strength: <strong>".$cardStrength."</strong> - Wits: <strong>".$cardWits."</strong> - Alchemy: <strong>".$cardAlchemy."</strong>" ?></div>
<?php			} ?>
				<div class="card-text-box">
					<div class="card-text-oracle">
						<p><?php echo $cardText ?></p>
					</div>
				</div>
				
				<div class="card-text-box">
					<div class="card-text-flavor">
						<p><?php echo $cardFlavor ?></p>
					</div>
				</div>
				<!-- Creature and Planeswalker only-->
<!--				<div class="card-text-stats"><!--Card stats--><!--</div> -->
				<!--^^^-->
			</div>

<?php			
			if(isset($cardPrintings) && $cardPrintings != "")
			{
				$cardPrintingsSearch = "SELECT * FROM `cards` WHERE Name LIKE '$cardName'";
				if(isset($cardSubname))
				{
					if($cardSubname != "")
					{
						$cardPrintingsSearch .= " AND Subname LIKE '$cardSubname'";
					}
				}
//				$cardPrintingsSearch .= " AND Card_code NOT '$cardCode'";
?>
			<div class="prints">
				<div class="prints-current">
					<a class="prints-current-set" data-track="{"category":"Card Detail","action":"Navigate","label":"Parent Set"}" href="<!--Link to set page-->">
						<svg class="prints-current-set-symbol" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 990 1024">
							<path d="M.775 171.102c96.217.111 192.488-.717 288.65.386 26.868 13.406 51.584 31.281 75.087 50.039-11.696 41.378-8.552 88.438 16.055 124.74 17.434 27.474 47.611 45.239 79.445 50.314l.055 497.248C351.107 834.08 244.959 767.49 151.445 685.175c-32.053-28.467-63.28-62.729-70.893-106.423-9.103-51.97 12.689-102.395 14.345-154.035.717-40.108-.111-81.541-16.331-118.946-15.227-40.494-46.783-71.224-70.065-106.865-6.014-8.054-7.503-17.985-7.724-27.805zm624.469 50.148c23.834-18.316 48.551-36.301 75.418-49.763 96.108-1.103 192.268-.275 288.43-.386-.719 8.219-.497 16.992-5.572 23.999-21.572 35.253-52.523 64.548-68.963 103.057-19.475 40.108-20.799 85.734-19.529 129.485 2.481 50.369 22.675 99.581 14.454 150.339-7.613 44.134-39.115 78.616-71.39 107.36-94.23 83.251-201.702 149.842-311.491 210.418-.055-166.337-.055-332.675-.055-499.012 35.75-4.359 69.403-25.378 86.837-57.156 20.965-35.418 22.731-79.334 11.861-118.34z"></path>
						</svg>
						<span class="prints-current-set-name"><?php echo $cardPack ?></span>
						<span class="prints-current-set-details"><?php echo $cardNumber ?> · <?php echo $cardRarity ?></span>
					</a>
				</div>
				<table class="prints-table">
					<thead>
						<tr>
							<th>
								<a href="<?php echo "search.php?q=".$cardName.", ".$cardSubname."&as=imageSearch" ?>">Prints</a>
							</th>
							<th>
								<p style="visibility:hidden">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
							</th>
							<th>
								<span>Rarity</span>
							</th>
						</tr>
					</thead>
					<tbody>
<?php
					$cardPrintingsSearchResults = mysqli_query($connection, $cardPrintingsSearch);
					while($row = mysqli_fetch_assoc($cardPrintingsSearchResults))
					{
						$otherCardCode = $row['Card_code'];
						$otherCardPack = $row['Pack'];
						$otherCardNumber = $row['Code'];
						$otherCardRarity = $row['Rarity'];
						$otherCardImagePath = "https://f000.backblazeb2.com/file/FullmetalAlchemist-Database/FMA".$otherCardNumber.".jpg";
?>
						<tr class="current">
							<td data-th="Prints">
								<a data-component="card-tooltip" data-card-image-front="<?php echo $otherCardImagePath ?>" data-card-id="<?php echo $otherCardCode ?>" href="card.php?Card_code=<?php echo $otherCardCode ?>">
									<?php echo $otherCardNumber ?>
								</a>
							</td>
							<td>
								<a style="text-align:left" data-component="card-tooltip" data-card-image-front="<?php echo $otherCardImagePath ?>" data-card-id="<?php echo $otherCardCode ?>" href="card.php?Card_code=<?php echo $otherCardCode ?>">
									<?php echo $otherCardPack ?>
								</a>
							</td>
							<td data-th="Rarity">
								<a data-component="card-tooltip" data-card-image-front="<?php echo $otherCardImagePath ?>" data-card-id="<?php echo $otherCardCode ?>" href="card.php?Card_code=<?php echo $otherCardCode ?>">
									<?php echo $otherCardRarity ?>
								</a>
							</td>
						</tr>
					</tbody>
<?php				} //closes the while loop ?>
				</table>
			</div>
<?php		} //closes the if statement ?>
		</div>
	</div>
<?php
		}//closes while loop
?>
	
</div>


	<?php }
include "html/footer.html";
	?>


	<div id="card-tooltip"></div>

	<script src="js/scryfallAdvancedSearch.js"></script>

</body>

</html>