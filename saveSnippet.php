<?php
// Establish a database connection
$servername = 'sql105.infinityfree.com';
$username = 'if0_35456817';
$password = '5oujHLoy5Ou';
$dbname = 'if0_35456817_calculatoristp';

// Query the database based on the search query
$stmt = $conn->prepare("SELECT * FROM snippets WHERE content LIKE ?");
$searchTerm = '%' . $searchQuery . '%';
$stmt->bind_param("s", $searchTerm);
$stmt->execute();
$result = $stmt->get_result();

$snippets = array();

// Retrieve the search results
while ($row = $result->fetch_assoc()) {
    $snippets[] = $row;
}

// Convert the array to JSON and return it
echo json_encode($snippets);

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Validate and sanitize user input
    $input = $_POST['input'];
    // ...

    // Store the user input in the database
    $stmt = $conn->prepare("INSERT INTO snippets (content) VALUES (?)");
    $stmt->bind_param("s", $input);
    $stmt->execute();

    echo 'Snippet saved successfully';
}

$conn->close();
?>