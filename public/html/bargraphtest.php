<?php
/**
 * Created by PhpStorm.
 * User: kmell
 * Date: 5/25/2017
 * Time: 4:08 PM
 */



include "../connect.php";

//error_reporting(0);
//ini_set('memory_limit','2224M');
//set_time_limit(0);

//mysqli_set_charset($dbScrap, 'utf8');

//$time1 = microtime(true);

$Array02[]     = array();

$Year = 2015;

$tsql = "SELECT BeginningBalance, DebitAmount, CreditAmount, GL_PeriodPostingHistory.AccountKey, 
          FiscalYear, FiscalPeriod, AccountType  FROM GL_PeriodPostingHistory
          INNER JOIN GL_Account
          ON GL_PeriodPostingHistory.AccountKey = GL_Account.AccountKey
          Where GL_Account.Account ='5010-02-0000' 
          AND  FiscalYear = 2015";

$stmt = sqlsrv_query( $dbSage, $tsql);
if( $stmt === false)
{
    echo "Error in query preparation/execution." . "<br>";
    die( print_r( sqlsrv_errors(), true));
}


//echo "<p style='background-color: yellow'>Items: " . sqlsrv_num_fields( $stmt ) . "<p/>";

while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)){
    $BeginningBalance = $row['BeginningBalance'];
    $DebitAmount      = $row['DebitAmount'];
    $CreditAmount     = $row['CreditAmount'];
    $AccountKey = $row['AccountKey'];
    $FiscalYear = $row['FiscalYear'];
    $FiscalPeriod = $row['FiscalPeriod'];
    $AccountType = $row['AccountType'];
    $EndingBalance = $BeginningBalance + $DebitAmount - $CreditAmount;

    switch ($FiscalPeriod){
        case 1:
            $Date = $FiscalYear . "-12-01";
            break;
        case 2:
            $Date = $FiscalYear . "-01-01";
            break;
        case 3:
            $Date = $FiscalYear . "-02-01";
            break;
        case 4:
            $Date = $FiscalYear . "-03-01";
            break;
        case 5:
            $Date = $FiscalYear . "-04-01";
            break;
        case 6:
            $Date = $FiscalYear . "-05-01";
            break;
        case 7:
            $Date = $FiscalYear . "-06-01";
            break;
        case 8:
            $Date = $FiscalYear . "-07-01";
            break;
        case 9:
            $Date = $FiscalYear . "-08-01";
            break;
        case 10:
            $Date = $FiscalYear. "-09-01";
            break;
        case 11:
            $Date = $FiscalYear. "-10-01";
            break;
        case 12:
            $Date = $FiscalYear. "-11-01";
            break;
    }

    $Array02[] = array(
        'BeginningBalance' => $BeginningBalance,
        'DebitAmount'      => $DebitAmount,
        'CreditAmount'     => $CreditAmount,
        'AccountKey'       => $AccountKey,
        'FiscalYear'       => $FiscalYear,
        'FiscalPeriod'     => $FiscalPeriod,
        'AccountType'      => $AccountType,
        'EndingBalance'    => $EndingBalance,
        'Date'             => $Date
    );

}

//echo "<pre>";
$FilteredArray = array_values(array_filter($Array02));
//print_r($FilteredArray);
echo json_encode($FilteredArray);
//echo "</pre>";
//$time2 = microtime(true);
//echo 'Total execution time: ' . ($time2 - $time1) . " Sec";//value in seconds
//echo "<br/>";
//echo "Used " . memory_get_usage() . " Bytes";


/* Free statement and connection resources. */
sqlsrv_free_stmt( $stmt);
sqlsrv_close( $dbSage);
