<!DOCTYPE html>
<html>

<head>
	<?php
	include "html/head.html";
	?>
</head>

<body>
	<?php
	include "html/skip_links.html";
	include "html/header.html";

	?>

<!-- Creates the main layout of the page -->
<div id="main" class="main" role="main">

	<script src="js/searchControls.js"></script>
	<script src="js/searchControlsDisplay.js"></script>
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

	<!--Sets up the main body/layout of the checklist-style results page-->
	<div class="checklist-wrapper">
		<table class="checklist" id="js-checklist">
			
			<!--Sets up the titles for the results columns-->
			<thead>
				<tr>
					<th class="em13"><a href="search.php?q=<?php echo $query?>&order=set">Set</a></th>
					<th class="em6"><a href="search.php?q=<?php echo $query?>&order=set"></a><abbr title="Collector Number">№</abbr></th>
					<th class="W30"><a href="search.php?q=<?php echo $query?>&order=name">Name</a></th>
					<th class="em12"><a href="search.php?q=<?php echo $query?>&order=faction">Faction</a></th>
					<th><a href="search.php?q=<?php echo $query?>&type">Type</a></th>
					<th class="em10"><a href="search.php?q=<?php echo $query?>&order=rarity"><abbr title="Rarity">R</abbr></a></th>
				</tr>
			</thead>
			
			<tbody>


				<?php


		$result2 = mysqli_query($connection, $sql_statement2);
		while ($row = mysqli_fetch_assoc($result2))
		{
			//Sets up variables for the results
			$cardCode = $row['Card_code'];
			$cardPack = $row['Pack'];
			$cardNumber = $row['Code'];
			$cardName = $row['Name'];
			if ($row['Subname'] != "") $subName  = $row['Subname'];
			$cardFaction = $row['Faction'];
			$cardType = $row['Card_type'];
			$cardRarity = $row['Rarity'];
			$cardImagePath = "https://f000.backblazeb2.com/file/FullmetalAlchemist-Database/FMA".$cardNumber.".jpg";
				?>
				<!--Displays those results-->
				<tr data-component="card-tooltip" data-card-image-front="<?php echo $cardImagePath ?>" data-card-id="<?php echo $cardCode ?>">
					<td data-th="Set">
						<a tabindex="-1" href="card.php?Card_code=<?php echo $cardCode ?>">
							<?php echo $row['Pack']; ?>
						</a>
					</td>
					<td data-th="Code">
						<a tabindex="-1" href="card.php?Card_code=<?php echo $cardCode ?>">
							<?php echo $row['Code']; ?>
						</a>
					</td>
					<td data-th="Name" class="ellipsis">
						<a lang="en" href="card.php?Card_code=<?php echo $cardCode ?>">
							<?php echo $row['Name']; if ($row['Subname'] != ""){echo ", ".$row['Subname'];}?>
						</a>
					</td>
					<td data-th="Faction">
						<a tabindex="-1" href="card.php?Card_code=<?php echo $cardCode ?>">
							<?php echo $row['Faction']; ?>
						</a>
					</td>
					<td data-th="Card Type">
						<a tabindex="-1" lang="en" href="card.php?Card_code=<?php echo $cardCode ?>">
							<?php echo $row['Card_type']; ?>
						</a>
					</td>
					<td data-th="Rarity">
						<a tabindex="-1" href="card.php?Card_code=<?php echo $cardCode ?>">
							<?php echo $row['Rarity']; ?>
						</a>
					</td>
				</tr>
				
<?php
	//Closes the while loop!
	}
?>
			</tbody>	
		</table>
	</div>
<?php	
	if ($pn == $lastPage){include "lastPageQuote.php";}
	include "searchControlsDisplay.php";
?>
</div>

	<?php
	include "html/footer.html";
	?>

	<div id="card-tooltip"></div>

	<script src="js/scryfallAdvancedSearch.js"></script>

</body>

</html>