<?php
//////////////////////////////////// Pagination Logic ////////////////////////////////////////////////////////////////////////

// Get total of Num rows from the database query
//$nr = mysql_num_rows($sql);
$nr = mysqli_affected_rows($connection);

// Get pn from URL vars if it is present
if (isset($_GET['pn']))
{
	// filter everything but numbers for security(new)
    $pn = preg_replace('#[^0-9]#i', '', $_GET['pn']);
}

// If the pn URL variable is not present force it to be value of page number 1
else {$pn = 1;}

//This is where we set how many database items to show on each page
$itemsPerPage = 20;

// Get the value of the last page in the pagination result set
$lastPage = ceil($nr / $itemsPerPage);

// Be sure URL variable $pn(page number) is no lower than page 1 and no higher than $lastpage

// If it is less than 1
if ($pn < 1)
{
	// force it to be 1
    $pn = 1;
}
// if it is greater than $lastpage
else if ($pn > $lastPage)
{
	// force it to be $lastpage's value
    $pn = $lastPage;
}

// This creates the numbers to click in between the next and back buttons

$centerPages = "";
$sub1 = $pn - 1;
$add1 = $pn + 1;

if ($pn == 1)
{
    $centerPages .= '<span class="pagNumActive">'.$pn.'</span>';
    $centerPages .= '<a href="'.$_SERVER['PHP_SELF'].'?'.$_SERVER['QUERY_STRING'].'&pn='.$add1.'">'.$add1.'</a>';
}
else if ($pn == $lastPage)
{
    $centerPages .= '<a href="'.$_SERVER['PHP_SELF'].'?'.$_SERVER['QUERY_STRING'].'&pn='.$add1.'">'.$add1.'</a>';
    $centerPages .= '<a href="'.$_SERVER['PHP_SELF'].'?'.$_SERVER['QUERY_STRING'].'&pn='.$sub1.'">'.$sub1.'</a>';
    $centerPages .= '<span class="pagNumActive">'.$pn.'</span>';
}
else if ($pn > 2 && $pn < ($lastPage - 1))
{
    $centerPages .= '<a href="'.$_SERVER['PHP_SELF'].'?'.$_SERVER['QUERY_STRING'].'&pn='.$sub1.'">'.$sub1.'</a>';
    $centerPages .= '<span class="pagNumActive">'.$pn.'</span>';
    $centerPages .= '<a href="'.$_SERVER['PHP_SELF'].'?'.$_SERVER['QUERY_STRING'].'&pn='.$add1.'">'.$add1.'</a>';
}
else if ($pn > 1 && $pn < $lastPage)
{
    $centerPages .= '<a href="'.$_SERVER['PHP_SELF'].'?'.$_SERVER['QUERY_STRING'].'&pn='.$sub1.'">'.$sub1.'</a>';
    $centerPages .= '<span class="pagNumActive">'.$pn.'</span>';
    $centerPages .= '<a href="'.$_SERVER['PHP_SELF'].'?'.$_SERVER['QUERY_STRING'].'&pn='.$add1.'">'.$add1.'</a>';
}

// This line sets the "LIMIT" range... the 2 values we place to choose a range of rows from database in our query
$limit = 'LIMIT ' .($pn - 1) * $itemsPerPage .',' .$itemsPerPage;

// Now we are going to run the same query as above but this time add $limit onto the end of the SQL syntax
// $sql2 is what we will use to fuel our while loop statement below
$sql_statement2 = "$sql_statement ORDER BY Card_code ASC $limit";

//////////////////////////////// END Pagination Logic ////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////// Pagination Display Setup /////////////////////////////////////////////////////////////////////

// Initialize the pagination output variable
$paginationDisplay = "";

// This code runs only if the last page variable is ot equal to 1, if it is only 1 page we require no paginated links to display
if ($lastPage != "1")
{
    // This shows the user what page they are on, and the total number of pages
    //$paginationDisplay .= 'Page '.$pn.' of '.$lastPage.'&nbsp;  &nbsp;  &nbsp; ';

	// If we are not on page 1 we can place the Back button
    if ($pn != 1)
	{
		$paginationDisplay .= '<a class="button-n icon-only" data-track="{&quotcategory&quot:&quotSearch Controls&quot,&quotaction&quot:&quotPaginate&quot,&quotlabel&quot:&quotFirst&quot}" href="'.$_SERVER['PHP_SELF'].'?'.$_SERVER['QUERY_STRING'].'&pn=1">
					<svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
						<path d="M18 4.438l-1.375-1.438-12.625 12 12.563 12 1.437-1.406-11.094-10.594 11.094-10.562zm12 0l-1.375-1.438-12.625 12 12.563 12 1.437-1.406-11.094-10.594 11.094-10.562zM2 3h-1.66v24h1.66z"></path>
					</svg>
					<b class="vh">First Page</b>
				</a>';
        $previous = $pn - 1;
        $paginationDisplay .= '<a class="button-n" data-track="{&quotcategory&quot:&quotSearch Controls&quot,&quotaction&quot:&quotPaginate&quot,&quotlabel&quot:&quotPrevius&quot}" href="'.$_SERVER['PHP_SELF'].'?'.$_SERVER['QUERY_STRING'].'&pn='.$previous.'">
					<svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
						<path d="M20.625 3l-12.625 12 12.563 12 1.437-1.406-11.094-10.594 11.094-10.562z"></path>
					</svg>
					<b>Previous</b>
				</a>';
    }


	// Lay in the clickable numbers display here between the Back and Next links
    //$paginationDisplay .= $centerPages;


	// If we are not on the very last page we can place the Next button

    if ($pn != $lastPage)
	{
        $nextPage = $pn + 1;
        $paginationDisplay .=  '<a data-track="{&quotcategory&quot:&quotSearch Controls&quot,&quotaction&quot:&quotPaginate&quot,&quotlabel&quot:&quotNext&quot}" href="'.$_SERVER['PHP_SELF'].'?'.$_SERVER['QUERY_STRING'].'&pn='.$nextPage.'" class="button-n">
					<b>Next 20</b>
					<svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
						<path d="M9.375 3l12.625 12-12.562 12-1.438-1.406 11.094-10.594-11.094-10.562z"></path>
					</svg>
				</a>';
		$paginationDisplay .= '<a data-track="{&quotcategory&quot:&quotSearch Controls&quot,&quotaction&quot:&quotPaginate&quot,&quotlabel&quot:&quotLast&quot}" href="'.$_SERVER['PHP_SELF'].'?'.$_SERVER['QUERY_STRING'].'&pn='.$lastPage.'" class="button-n icon-only">
					<svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
						<path d="M12 4.438l1.375-1.438 12.625 12-12.563 12-1.437-1.406 11.094-10.594-11.094-10.562zm-12 0l1.375-1.438 12.625 12-12.563 12-1.437-1.406 11.094-10.594-11.094-10.562zM28 3h1.66v24h-1.66z"></path>
					</svg>
					<b class="vh">Last Page</b>
				</a>';
    }
?>

<?php
}
///////////////////////////////////// END Pagination Display Setup ///////////////////////////////////////////////////////////////////////////

$outputList = '';
?>