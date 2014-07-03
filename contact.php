<?php
/**
 * EDIT THE VALUES BELOW THIS LINE TO ADJUST THE CONFIGURATION
 * EACH OPTION HAS A COMMENT ABOVE IT WITH A DESCRIPTION
 */
/**
 * Specify the email address to which all mail messages are sent.
 * The script will try to use PHP's mail() function,
 * so if it is not properly configured it will fail silently (no error).
 */
$mailTo     = 'euclidesflores@swordcode.com';

/**
 * Set the message that will be shown on success
 */
$successMsg = 'Gracias, mensage enviado';

/**
 * Set the message that will be shown if not all fields are filled
 */
$fillMsg    = 'Favor llenar todos los campos';

/**
 * Set the message that will be shown on error
 */
$errorMsg   = 'Tenemos un problema enviando este mensaje, lo sentimos';

/**
 * DO NOT EDIT ANYTHING BELOW THIS LINE, UNLESS YOU'RE SURE WHAT YOU'RE DOING
 */

?>
<?php
if(
    !isset($_POST['email']) ||
    !isset($_POST['website']) ||
    !isset($_POST['message']) ||
    !isset($_POST['name']) ||
    empty($_POST['email']) ||
    empty($_POST['website']) ||
    empty($_POST['message']) ||
    empty($_POST['name'])
) {
    echo '<script type="text/javascript">window.parent.$("#contact .result").html("' . $fillMsg . '");</script>';
} else {

    ?>
    <script type="text/javascript">alert('dd');</script>
    <?php
    $success = @mail($mailTo, $_POST['website'], $_POST['message'], 'From: ' . $_POST['name'] . '<' . $_POST['email'] . '>');
    if ($success) {
        echo '<script type="text/javascript">window.parent.$("#contact .result").html("<big><big><big>' . $successMsg . '</big></big></big>");window.parent.$("#contact").find("input, button, textarea").slideUp();</script>';
    } else {
        echo '<script type="text/javascript">window.parent.$("#contact .result").html("' . $errorMsg . '");</script>';
    }
}
