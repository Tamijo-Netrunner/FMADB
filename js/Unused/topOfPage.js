<meta charset="utf-8">
<title>FMADB: Fullmetal Alchemist TCG Database</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="A database for the Fullmetal Alchemist TCG">
<meta property="og:site_name" content="Fullmetal Alchemist DB">
<meta property="og:type" content="website">
<meta property="og:title" content="Fullmetal Alchemist DB">
<meta property="og:description" content="Search for Fullmetal Alchemist cards">
<link rel="icon" type="image/x-icon" href="images/fmatcg.png">
<link rel="stylesheet" media="all" href="css/fmadb Backup.css">

<div id="header" data-component="header" class="header">
	<div class="header-control-row">
	
		<a title="Back to homepage" href="/fmadb" class="header-logo">
			<span class="vh">FMADb</span>
			<svg focusable="false" aria-hidden="true" width="460" height="460" viewBox="0 0 460 460" xmlns="http://www.w3.org/2000/svg">
			<img src="images/fmatcg.png" style="width:51px;height:28px;">
			</svg>
		</a>
		
		<form action="search.php" accept-charset="UTF-8" method="get" class="header-search">
			<label for="header-search-field" class="vh">Search for Fullmetal Alchemist cards</label>
			<input type="text" name="q" id="header-search-field" value="" placeholder="Search for Fullmetal Alchemist cards…" autocomplete="on" autocapitalize="none" autocorrect="off" spellcheck="false" maxlength="1024" class="header-search-field">
			<button type="submit" class="vh">Find Cards</button>
		</form>
		
		<div class="header-links">
			<div class="header-link-divider"></div>
			<a href="/FMADB/advanced.php" class="header-link double-pad-left">
				<svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
					<path d="M10 6h-4v2h4v-2zm14 0h-12v2h12v-2zm-22-4v26h26v-26h-26zm24 24h-22v-14h22v14zm0-16h-22v-6h22v6z"></path>
				</svg>
				<span>Advanced</span>
			</a>
			
			<a href="/FMADB/syntax.php" class="header-link">
				<svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
					<path d="M15 0c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15zm0 28c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zm-1-4h2v-4h-2v4zm1-18c-2.958 0-5.2 1.834-5.2 5h2c0-2.041 1.389-3 3.2-3 1.598 0 3 .935 3 2 0 3.281-4 2.656-4 8h2c-.146-4.063 4-3.646 4-8 0-2.209-2.238-4-5-4z"></path>
				</svg>
				<span>Syntax</span>
			</a>
			
			<a href="/FMADB/sets.php" class="header-link">
				<svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
					<path d="M15 2c-3.296 5.789-5.713 13.983-15 6l4 12v8h22v-8l4-12c-9.287 7.983-11.704-.211-15-6zm-9 24v-4h18v4h-18zm18-6.324v.324h-18v-.324l-2.32-6.962c5.055 1.849 8.383-.683 11.32-6.475 2.938 5.792 6.266 8.323 11.32 6.475l-2.32 6.962z"></path>
				</svg>
				<span>Sets</span>
			</a>
			
			<a href="/FMADB/random.php" class="header-link double-pad-right">
				<svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
					<path d="M20.594 18.406l3.594 3.594h-6.188l-.341-.034c-.229.655-.569 1.256-.997 1.786.421.151.867.248 1.338.248h6.188l-3.594 3.594 1.406 1.406 6-6-6-6-1.406 1.406zm3.594-10.406l-3.594 3.594 1.406 1.406 6-6-6-6-1.406 1.406 3.594 3.594h-6.188c-2.2 0-4 1.8-4 4v10c0 1.103-.897 2-2 2h-10v2h10c2.2 0 4-1.8 4-4v-10c0-1.103.896-2 2-2h6.188zm-11.848.034c.229-.654.565-1.258.993-1.787-.419-.15-.864-.247-1.333-.247h-10v2h10l.34.034z"></path>
				</svg> 
				<span>Random</span>
			</a> 

			<div class="header-link-divider"></div>
			<a title="Your account" href="/FMADB/settings" class="header-link icon-only">
				<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 32c118.663 0 216 96.055 216 216 0 45.887-14.373 88.578-38.928 123.692-11.413-36.912-44.537-64.38-84.385-67.413C371.483 288.374 384 257.149 384 224c0-70.741-57.249-128-128-128-70.74 0-128 57.249-128 128 0 33.149 12.517 64.374 35.313 88.279-39.861 3.033-72.994 30.519-84.396 67.45C54.424 344.761 40 302.154 40 256c0-118.663 96.055-216 216-216zm-96 184c0-53.019 42.981-96 96-96s96 42.981 96 96-42.981 96-96 96-96-42.981-96-96zm-53.333 188.058c0-43.808 31.782-68.058 64-68.058h40.622c28.662 10.663 60.712 10.68 89.422 0h40.622c32.717 0 64 24.665 64 68.073-83.416 79.913-215.066 79.926-298.666-.015z"></path>
				</svg> 
				<span class="vh">Sign In</span>
			</a>
		</div> 

		<button type="button" class="header-menu-button-container">
			<span class="button-n inverted header-menu-button">
				<svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
					<path d="M2 4v2h26v-2h-26zm0 12h26v-2h-26v2zm0 10h26v-2h-26v2z"></path>
				</svg> 
				<b class="header-menu-button-label">Menu</b>
			</span>
		</button>
	</div>
</div>

<div class="skip-links">
	<ul>
		<li><a href="#main">Skip to main content</a></li>
		<li><a href="#footer">Skip to footer</a></li>
	</ul>
</div>