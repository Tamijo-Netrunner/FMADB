<?php

// Generate a random card code
$rand = rand(1001,2533);
if($rand > 1308){$rand = $rand-308+1000;};
if($rand > 2145){$rand = $rand-145+1000;};
if($rand > 3145){$rand = $rand-145+1000;};
if($rand > 4179){$rand = $rand-179+1000;};
if($rand > 5186){$rand = $rand-186+1000;};
if($rand > 6191){$rand = $rand-191+1000;};
if($rand > 7191){$rand = $rand-191+1000;};
if($rand > 8030){$rand = $rand-30+1000;};
if($rand > 9006){$rand = $rand-6+1000;};
if($rand > 10066){$rand = $rand-66+1000;};
if($rand > 11060){$rand = $rand-60+1000;};
$randCardCode = $rand;

header("Location: /FMADB/card.php?Card_code=".$randCardCode);
?>