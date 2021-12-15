<!DOCTYPE html>
<html>

<head>
	<?php
		include "head.html";
		include "skip_links.html";
	?>
</head>

<body>

	<div id="main" class="main" role="main">
		<div class="homepage">
			<div class="inner-flex">
				<h1 class="homepage-title">Search for <strong>Fullmetal Alchemist TCG</strong> cards</h1>
				<form class="homepage-form" action="search.php" accept-charset="UTF-8" method="get">
					<a class="homepage-logo" rel="nofollow" title="Back to homepage" href="/">
						<span class="vh">FMA TCG Db</span>
						<img src="images/fmatcg.png" style="width:51px;height:28px;margin-top:8px;margin-left:-1px;">
					</a>
					<input type="text" name="q" id="q" data-component="homepage-search" class="homepage-form-field" placeholder="Search Fullmetal Alchemist cards" autocomplete="on" autocapitalize="none" autocorrect="off" spellcheck="false" maxlength="1024" tabindex="1">
					<button type="submit" class="visuallyhidden">
						<span class="vh">Find cards</span>
					</button>
				</form>

				<p class="homepage-links">
					<a class="button-n inverted" data-track="{&quot;category&quot;:&quot;Homepage&quot;,&quot;action&quot;:&quot;Navigate&quot;,&quot;label&quot;:&quot;Advanced Search&quot;}" href="advanced.php">Advanced Search</a>
					<a class="button-n inverted" data-track="{&quot;category&quot;:&quot;Homepage&quot;,&quot;action&quot;:&quot;Navigate&quot;,&quot;label&quot;:&quot;Syntax Guide&quot;}" href="syntax.php">Syntax Guide</a>
					<a class="button-n inverted" data-track="{&quot;category&quot;:&quot;Homepage&quot;,&quot;action&quot;:&quot;Navigate&quot;,&quot;label&quot;:&quot;Sets&quot;}" href="sets.php">All Sets</a>
					<a class="button-n inverted" data-track="{&quot;category&quot;:&quot;Homepage&quot;,&quot;action&quot;:&quot;Navigate&quot;,&quot;label&quot;:&quot;Random Card&quot;}" href="test.php">Test Page</a>
				</p>
				
				<div class="homepage-collage">
					<div class="homepage-collage-cards">
						<a data-track="{&quot;category&quot;:&quot;Homepage&quot;,&quot;action&quot;:&quot;Navigate&quot;,&quot;label&quot;:&quot;Maes Hughes, Hero of the Day&quot;}" href="card.php?Card_code=4162">
							<img class="card" alt="" title="Maes Hughes, Hero of the Day" src="https://f000.backblazeb2.com/file/FullmetalAlchemist-Database/FMAHPXC01.jpg">
						</a>
						<a data-track="{&quot;category&quot;:&quot;Homepage&quot;,&quot;action&quot;:&quot;Navigate&quot;,&quot;label&quot;:&quot;Roy Mustang, Master Manipulator&quot;}" href="card.php?Card_code=1303">
							<img class="card" alt="" title="Roy Mustang, Master Manipulator" src="https://f000.backblazeb2.com/file/FullmetalAlchemist-Database/FMAFMAXE06.jpg">
						</a>
						<a data-track="{&quot;category&quot;:&quot;Homepage&quot;,&quot;action&quot;:&quot;Navigate&quot;,&quot;label&quot;:&quot;Alphonse Elric, Shy Young Boy&quot;}" href="card.php?Card_code=1044">
							<img class="card" alt="" title="Alphonse Elric, Shy Young Boy" src="https://f000.backblazeb2.com/file/FullmetalAlchemist-Database/FMAFMA044.jpg">
						</a>
						<a data-track="{&quot;category&quot;:&quot;Homepage&quot;,&quot;action&quot;:&quot;Navigate&quot;,&quot;label&quot;:&quot;Scar, Brawler&quot;}" href="card.php?Card_code=2116">
							<img class="card" alt="" title="Scar, Brawler" src="https://f000.backblazeb2.com/file/FullmetalAlchemist-Database/FMABWTSC01.jpg">
						</a>
						<a data-track="{&quot;category&quot;:&quot;Homepage&quot;,&quot;action&quot;:&quot;Navigate&quot;,&quot;label&quot;:&quot;Burning the Past&quot;}" href="card.php?Card_code=9003">
							<img class="card" alt="" title="Burning the Past" src="https://f000.backblazeb2.com/file/FullmetalAlchemist-Database/FMAABHOL03.jpg">
						</a>
						<a data-track="{&quot;category&quot;:&quot;Homepage&quot;,&quot;action&quot;:&quot;Navigate&quot;,&quot;label&quot;:&quot;Edward Elric, the Fullmetal Alchemist&quot;}" href="card.php?Card_code=10001">
							<img class="card" alt="" title="Edward Elric, the Fullmetal Alchemist" src="https://f000.backblazeb2.com/file/FullmetalAlchemist-Database/FMAPCON0501.jpg">
						</a>
						<a data-track="{&quot;category&quot;:&quot;Homepage&quot;,&quot;action&quot;:&quot;Navigate&quot;,&quot;label&quot;:&quot;Lust, Femme Fatale&quot;}" href="card.php?Card_code=1300">
							<img class="card" alt="" title="Lust, Femme Fatale" src="https://f000.backblazeb2.com/file/FullmetalAlchemist-Database/FMAFMAXE03.jpg">
						</a>
					</div>
				</div>
			</div>
		</div>
		
		<?php
		include "footer.html";
		?>
		
	</div>

</body>
</html>