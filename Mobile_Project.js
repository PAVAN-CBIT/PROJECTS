<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>M O B I L E</title>
	<link rel="stylesheet" type="text/css" href="STYLE.css">
    <link rel="shortcut icon"  href="icon.ico">
    <script type="text/javascript">


    
       var circle= document.getElementById("circle");
       var downbtn= document.getElementById("downbtn");
       var upbtn= document.getElementById("upbtn");

       var rotateValue=circle.style.transform;
       var rotateSum;

       upbtn.onclick=function()
       {


          rotateSum=rotateValue+ "rotate(-90 deg)";
          circle.style.transform=rotateSum;
          rotateValue=rotateSum;

       }
       downbtn.onclick=function()
       {


          rotateSum=rotateValue+ "rotate(90 deg)";
          circle.style.transform=rotateSum;
          rotateValue=rotateSum;

       }
   </script>
</head>
<body>
   <div class="main">

   	<nav>
          <div class="logo">
          	<img src="appi.png">
          	

          </div>


   		   		<div class="links">
   			<ul>
   				
               <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                 <li><a href="#">Contact</a></li>
                  <li><a href="#">Videos</a></li>

   			</ul>
   			
   		</div>

   	</nav>
   	<div class="info">
         <div class="overlay"></div>
        <img src="iphone.jpg" class="mobile">
   		<div id="circle">
   			<div class="feature one">
   				<img src="cam.jpg">
   				<div>
   					<h1>Camera</h1>
   					<p>12MP Wide Angle Lens</p>
   				</div>
   			</div>
   			<div class="feature two">
   				<img src="processor.jpeg">
   				<div>
   					<h1>Processor</h1>
   					<p>Snapdragon Octa-Core 11nm</p>
   				</div>
   			</div>
   			<div class="feature three">
   				<img src="display.jpg">
   				<div>
   					<h1>Display</h1>
   					<p>6.5" Mini Drop Fullscreen</p>
   				</div>
   			</div>
   			<div class="feature four">
   				<img src="battery.jpg">
   				<div>
   					<h1>Battery-Life</h1>
   					<p>5000mAH 7200Hrs Standby</p>
   				</div>
   			</div>
   		</div>
   	</div>
    <div class="controls">
        <img src="dwn.png" id="downbtn">
        <h3>Features</h3>
    
        <img src="upbtn.png" id="upbtn">
    </div>
   </div>

</body>
</html>
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*{

        margin: 0;
        padding: 0;
        font-family: sans-serif;
}

.main{

        width: 100%;
        height: 100vh;
        position: relative;
        overflow: hidden;
        background: linear-gradient(to right,#9c27b0,#8ecdff);


}



nav{

        width: 80%;
        position: sticky;
        margin: 20px auto;
        z-index: 1;
        display: flex;
        align-items: center;
}


.logo{


        flex-basis: 20%;

}

.logo img{



        width:70px;
}
.links{


        flex: 1;
        text-align: right;

}




.links ul  li
{

              list-style: none;
              display: inline-block;
              margin: 0 20px;



}

.links ul  li a
{

              
                color: whitesmoke;
                text-decoration: none;


}

.info{
       height: 1000px;
       width: 1000px;
       position: absolute;
       top: 50%;
       left: 0;
       transform: translateY(-50%);



}
#circle{
               height: 1000px;
               width: 1000px;
               position: absolute;
               top: 0;
               left:-10%;
               transition: 1s;
                transform:rotate(0deg);
               border-radius:50%;
               

}


.feature img{

        width: 100px;
}

.feature{

        position: absolute;
        display: flex;
        color: greenyellow;
}
.feature div{
              
              margin-left: 30px;




}
.feature div p{
              
              margin-top: 8px;




}



.one{

        top: 450px;
        right: 50px;
}
.two{

        top: 150px;
        left: 350px;
        transform:rotate(-90deg);
}
.three{

        bottom: 450px;
        left: 50px;
        transform:rotate(-180deg);
}
.four{

        bottom: 150px;
        right: 350px;
        transform:rotate(-270deg);
}

.mobile{


        width: 220px;
        position: absolute;
        top: 50%;
        left: 35%;
        transform: translateY(-50px);
        z-index: 1;
}
.controls{



        position: absolute;
        right:10% ;
        top: 50%;
        transform: translateY(-50px);
        text-align: center;
}

.controls h3{

        margin: 15px 0;
        color: white;
}
#upbtn{
        width: 15px;
        cursor: pointer;
}
#downbtn{
        width: 15px;
        cursor: pointer;
        transform: rotate(180deg);
}

.overlay{

          width: 0;
          height: 0;
          border-left: 500px solid  red;
          border-right:500px solid transparent ;
          border-top:500px solid  pink;
          border-bottom: 500px solid  green;
          position: absolute;
          left: 0;
          top: 0;



}
