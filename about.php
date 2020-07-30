<?php
if($_POST["submit"]) {
    $recipient="livingunderthesofa@gmail.com";
    $subject="Form to email message";
    $fullname=$_POST["fullname"];
    $email=$_POST["email"];
    $message=$_POST["message"];

    $mailBody="Name: $fullname Email: <$senderEmail>\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>About</title>
    <link rel="stylesheet" href="CSS/main.css">
    <link rel="stylesheet" href="CSS/menu.css">
    <link rel="stylesheet" href="CSS/about.css">
  </head>
  <body>
    <ul id="menubar">
      <li class="menuitem"><a href="index.html">Home</a></li>
      <li class="menuitem"><a href="animeindex.html">Anime Index</a></li>
      <li class="menuitem menuabout active"><a href="about.html">About</a></li>
    </ul>
    <h1>About The Person Who Made This</h1>
    <div id="floater">
      <div id="floated"><img src="Images/Profile Picture/Saiki Kusuo.jpg" id="profile"></div>
      My initials are <b>EW</b>. I'm a big fan of anime. This site was created for the sole purpose of tracking the animes that I have watched. I have two friends whose initials are <b>LS</b> and <b>NN</b> that have watched <b>A LOT</b> of anime, and I am determined to beat them. <b>LS</b> has watched around 210, and <b>NN</b> has watched around 180, and they are in a sort of battle of who can watch more anime, and I'm determined to beat both of them, although it will probably take me forever, and they'll also be watching anime too. I don't know how fast I'll have to finish anime, but you can be sure this list will be continuously updated. This mostly started in the heat of the COVID-19 epidemic and through my own boredom, but with school slowly approaching, the updates will probably start to dwindle. I also have a ton of interest in coding languages, mostly <abbr title="HyperText Markup Language">HTML</abbr> (which was used to compile this website), <abbr title="Cascading Style Sheets">CSS</abbr> (which makes the website look <span>PRETTY</span>, although that's questionable), and <abbr title="JavaScript">JS</abbr> (which makes the website interactive, although that is also questionable). I will probably add more pages to the site as the list goes on, and I might even add a small log to this page about the latest changes to the page, but for now, it's probably going to stay very simple, although I do want to make some changes to the Anime Index site for <abbr title="The site isn't centered">obvious reasons.</abbr> I'm hoping to get other parts of the pages done, but for now, my main focus will be linking new pages to each of the Anime Index links. If you're confused about where the Anime Index page is, you can click <a href="animeindex.html">here</a>.
    </div>
    <h1>Contact Me Here</h1>
    <h2>Find a bug? Find something you might want me to add to the site? Find me personally annoying? Then I recommend contacting me!</h2>
    <div class="contactform">
      <form action="about.php" method="post" enctype=”multipart/form-data” name="contactform">
        <label for="fullname">Full Name*</label>
        <input type="text" id="fullname" name="fullname" placeholder="Your full name..." required>

        <label for="email">E-mail*</label>
        <input type="email" id="email" name="email" placeholder="Your e-mail..." required>

        <label for="message">Message*</label>
        <textarea id="message" name="message" placeholder="Write something.." style="height:200px"></textarea>

        <input type="submit" value="Submit">
      </form>
    </div>
  </body>
</html>
