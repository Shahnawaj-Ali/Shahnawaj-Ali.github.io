# Shahnawaj-Ali.github.io
A personal portfolio showcasing my web development projects using HTML, CSS, JavaScript, and Canva.

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Hover Animation</title>
	<style>
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		#man {
			width: 500px;
			height: 500px;
			margin: auto;
			background-image: url(d.png);
			background-repeat: no-repeat;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		#s-div {
			width: 91%;
			height: 51.5%;
			background-image: url(dextopandleptop.png);
			background-size: cover;
			box-sizing: border-box;
		}

		#s-div:hover {
			border: 2px solid blue;
			animation: stp 10s;
		}

		@keyframes stp {
			0% {
				background-position: top;
			}
			100% {
				background-position: bottom;
			}
		}
	</style>
</head>
<body>

	<div id="man">
		<div id="s-div"></div>
	</div>

</body>
</html>ght="11522" alt="Image" src="https://github.com/user-attachments/assets/41a73392-4312-43be-a3e9-01d924f0dd94" />
