<?php
	$query=($_GET['q']);
	$currentDisplay = "";
	if (isset($_GET['as'])) $currentDisplay=($_GET['as']);
	//echo $query;
?>

<div class="search-controls" data-component="search-controls">
	<div class="search-controls-inner">
		<!--Display Options-->

		<div class="search-controls-display-options">
			<label for="as">Show as</label>
			<select name="as" id="as" title="Change how cards are displayed" class="select-n" v-on:change="reloadSearch">
				<option <?php if ($currentDisplay == "imageSearch") echo 'selected="selected"'; ?> value="imageSearch">Images</option>
				<option <?php if ($currentDisplay == "checklistSearch" || $currentDisplay == "") echo 'selected="selected"'; ?> value="checklistSearch">Checklist</option>
			</select>
		</div>
		<!--
		<div class="search-controls-display-options">
			<form action="search.php?q=<?php echo $query?>" method="get">
				<label for="as">Show as </label>
				<select name="as" id="as" title="Change how cards are displayed" class="select-n">
					<option value="imageSearch">Images</option>
					<option value="<?php echo $_SERVER['PHP_SELF']."?".$_SERVER['QUERY_STRING']."&as=checklistSearch"?>">Checklist</option>
					<option value="imageSearch">Images</option>
					<option value="checklistSearch">Checklist</option>
				</select>
				<input type="submit" value="submit">
			</form>
		</div>
			-->

<!--				<?php echo($_SERVER['PHP_SELF']."?".$_SERVER['QUERY_STRING']."&as=imageSearch")?> -->
		<div class="search-controls-pagination">
			<?php echo $paginationDisplay; ?>
		</div>

	</div>
</div>

