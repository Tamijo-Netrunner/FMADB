<!DOCTYPE html>
<html>

<head>
	<?php
	//Setup header bar and css layout
	include "html/head.html";
	include "html/Skip_links.html";
	include "html/header.html";
	?>

</head>

<body>

	<!-- Creates the main layout of the page -->
<div id="main" class="main" role="main">

	<?php
	$query=($_GET['q']);
	include "searchControls.php";
	include "searchControlsDisplay.php";
	?>

	<!--Creates the search information box for number of results and prints the appropriate information-->
	<div class="search-info">
		<p style="text-align:left">
			Your search returned <strong>
				<?php echo mysqli_affected_rows($connection);?> cards
			</strong>
		</p>
	</div>

	<!--Sets up the main body/layout of the image-style results page-->
	<div class="card-grid">
		<div class="card-grid-inner">
			<?php
				//Sets up variables for the results
				$result2 = mysqli_query($connection, $sql_statement2);
				while ($row = mysqli_fetch_assoc($result2))
				{
					$cardCode = $row['Card_code'];
					$cardPack = $row['Pack'];
					$cardNumber = $row['Code'];
					$cardName = $row['Name'];
					$cardFaction = $row['Faction'];
					$cardType = $row['Card_type'];
					$cardRarity = $row['Rarity'];
					$cardImagePath = "https://f000.backblazeb2.com/file/FullmetalAlchemist-Database/FMA".$cardNumber.".jpg";
			?>
			<!--Displays those results-->
			<div class ="card-grid-item" data-card-id="<?php echo $cardCode ?>">
				<a class="card-grid-item-card" href="card.php?Card_code=<?php echo $cardCode ?>">
					<span class="card-grid-item-invisible-label" aria-hidden="true"><?php echo $cardName ?></span>
					<div class="card-grid-item-front">
						<img class="card" alt="<?php echo $cardName ?>" title="<?php echo $cardName ?>" src="<?php echo $cardImagePath ?>">
					</div>
				</a>
			</div>

			<?php
				//Closes the while loop!
				}
			?>
		</div>
	</div>
<?php
	if ($pn == $lastPage){include "lastPageQuote.php";}
	include "searchControlsDisplay.php";
?>
</div>


	<script src="js/scryfallAdvancedSearch.js"></script>

</body>

<?php
		//Sets the bottom bar
include "html/footer.html";
?>

</html>