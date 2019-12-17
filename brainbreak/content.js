console.log("chrome extension working");

function imageReplace() {
	console.log('images being replaced now');
	var imgs = document.getElementsByTagName('img');
	for (var x = 0; x < imgs.length; x++) {
		//code to pull from random image API - communicating with background script
		// chrome.runtime.sendMessage({msg: 'image', index: x}, function({data, index}){
		// 	images[index].src = data.link;
		// });
		let r = Math.floor(Math.random() * filenames.length);
		let file = "images/" + filenames[r];
		let url = chrome.extension.getURL(file);
		imgs[x].src = url;
	}
}

function imageFilter() {
	var images = document.getElementsByTagName('img');
	for (var i = 0; i < images.length; i++) {
		images[i].style.filter = "invert(100)";
	}
}

//filenames is an array that contains the images for the image replacement glitch
let filenames = [
	'giphy.gif',
	'source.gif',
	'tenor.gif',
	'tenor0.gif',
	'_64b56caa-20e4-11e6-bd64-8acd98c1ae00.jpg',
	'0_Newborn-boy-crying.jpg',
	'2eampx.jpg',
	'2TVIWBAUAFEL3OWAPDFB2PP654.jpg',
	'3-cute-puppies-that-grow-into-huge-dogs-58c2b1eecc5dd.jpg',
	'3amklwslgwq21.jpg',
	'5b9c97f72400003100534205.jpeg',
	'5bc5b261023a4__700-png.jpg',
	'5cc3233824000033007781a2.jpeg',
	'7-Strange-Side-Effects-of-Running-a-Lot-752x472.jpg',
	'09dff222d763d10bebcde24c519bae81.jpg',
	'10-Ways-to-OptimizeE28094or-StartE28094a-Running-Routine-offset_749666-1.jpg',
	'14physed-running-photo-jumbo.jpg',
	'20-Cute-Puppies-To-Help-Get-You-Through-Your-Day-Sullyburger-com2.jpg',
	'21.jpg',
	'28Physed-tmagArticle.jpg',
	'30_Adorable-Puppy-Pictures-that-Will-Make-You-Melt_124167640_YamabikaY-760x506.jpg',
	'52bd832e24f7c1a3c447f7fee58f4c51.jpg',
	'57d31d9f1300002b0039b0a5.jpeg',
	'61-cute-puppies.jpg',
	'81a2e7b1-717a-488a-a610-5fa9ae75f836-small.jpg',
	'113_Running_Header-2000x1334.jpg',
	'250px-How_to_achieve_your_weight_loss_goals.jpg',
	'346A03A000000578-0-image-a-15_1463739109533.jpg',
	'365d6610-08ca-40d7-a599-4b352cbd894e.jpg',
	'001022a4-500.jpg',
	'1200-woman-running-on-road.jpg',
	'04078-hal-higdon-top-10-running-tips-blog-700x394.jpg',
	'19169-running-life-hacks-blog-1200x675-380x214.jpg',
	'82573c82-49cf-11e8-85b3-af25d27017e0imagehires120601.jpg',
	'115912.jpg',
	'150128_em_uberpuppy.jpg',
	'160104-crying-baby-app-01.jpg',
	'170206-crying-babies-studies-feature.jpg',
	'236742-699x450-cutest-puppy-videos.jpg',
	'13890322.jpg',
	'19662200.jpg',
	'20190816-Running-4UP-MStabilityRunning.jpg',
	'26814760_923676877257_1524622507134444704_n-1024x1028.jpg',
	'37619564-6db7-4784-beaf-aa60c34d322e-large16x9_Manruns26.2milemarathoninlessthantwohoursAP3.jpg',
	'50684500-cute-puppies-playing-outdoors.jpg',
	'79942187a82e.jpg',
	'82399513-H.jpg',
	'102653081.jpg',
	'180724745_Crying_Babies_and_Children_0_8_Years.jpg',
	'368162171-H.jpg',
	'512536165-e1510081190643.jpg',
	'1036780592-1280x720.jpg',
	'1268321581-H.jpg',
	'1495031594-two-women-running-along-road.jpg',
	'8431547533_5afbe4d158_z.jpg',
	'8525192931_2953d43cf7_o.jpg',
	'16525416896_7c3dc1e57c_k-960x540.jpg',
	'23451351539_9bba924a13.jpg',
	'191104044022-running-stock-exlarge-169.jpg',
	'191104190653_1_540x360.jpg',
	'1521744674350.jpeg',
	'1552979922361.jpg',
	'1559567429287_GNH28C4IQ.1-2.jpg',
	'Alcohol.AK_.hz_.jpg',
	'AMjTNO3t.jpg',
	'asian-babies-yellow-dresses-crying-260nw-1433158946.jpg',
	'asics-runninginyour20s-runningalone_s.jpg',
	'ATMK2871-20x30-640x427.jpeg',
	'Babiescrying.jpg',
	'BABY_CRYING_Featured.jpg',
	'baby_crying_iawp3j.jpeg',
	'baby_food_allergies_2_1300x2x.jpg',
	'baby-1.jpg',
	'Baby-Cries-What-Your-Baby-Is-Trying-to-Tell-You-baby-post-by-Mama-Natural-750x394.jpg',
	'baby-cry-379396.jpg',
	'baby-crying-ai-neurosciencenews-public.jpg',
	'baby-wont-stop-crying.jpg',
	'babyCry_2371027b.jpg',
	'babyonplane.jpg',
	'be-running-guides-for-beginners.jpg',
	'beach-run.jpg',
	'beagle2_cute_puppies.jpg',
	'Best-Cute-Puppies-21.jpg',
	'Best-Running-Songs-2019.jpg',
	'bigstock-Newborn-baby-cry-resized_1000x600_crop_center.jpg',
	'Blakeney-Clouse-Custom-blakeneyc.com_.jpg',
	'bo-didley.jpg',
	'british-babies-cry-more-than-any-other-infants-in-the-world-787112.jpg',
	'carousel.jpg',
	'cep-banner-running-laufen-run-socks-blue-mann.jpg',
	'chow-chow-puppy.jpg',
	'colic-101-722x406.jpg',
	'controlled-crying-method-technique-dr-richard-ferbert-sleep-problems-tips_w555_h379.jpg',
	'Controversial-book-claims-itE28099s-better-to-let-babies-cry-themselves-to-sleep-730x410.jpg',
	'corgi-dog-puppies.jpg',
	'crybaby.jpg',
	'crying_baby_bottle.jpg.653x0_q80_crop-smart.jpg',
	'crying_baby.jpg',
	'crying-aby-with-hands-on-head.jpg',
	'crying-babies-need-be-handled-mentally-healthy-mom.jpg',
	'crying-babies.jpg',
	'Crying-Baby-960x667.jpg',
	'Crying-baby-flickr.jpg',
	'crying-baby.jpg',
	'crying-baby0.jpg',
	'Crying-in-babies.jpg',
	'crying.jpg',
	'CryingBabies.jpg',
	'cryingbaby.jpg',
	'cute-grumpy-puppies-8-326x235.jpg',
	'Cute-Pictures-German-Shepherd-Puppies.jpg',
	'Cute-Pictures-Puppies.jpg',
	'Cute-Puppies-_blucheese-Sullyburger-com.jpg',
	'cute-puppies-1.jpg',
	'cute-puppies-5.jpg',
	'cute-puppies-awesomelycute-com-3253.jpg',
	'cute-puppies-cute-puppies-42341671-735-743.jpg',
	'Cute-puppies-dogs-37395739-1600-1200.jpg',
	'cute-puppies-feature-650x507.jpg',
	'cute-puppies-grow-up.jpg',
	'cute-puppy-1.jpg',
	'cute-puppy-2.jpg',
	'Cute-puppy-Names-Over-200-Adorable-Ideas-LS-long.jpg',
	'Cute-puppy-pictures-science-why-adorable-puppies-964549.jpg',
	'Cute-puppy-pictures-science-why-adorable-puppies-1355345.jpg',
	'cutest-puppy-dog-pictures-coverimage.jpg',
	'd2a8cbc82f4551754e46c2b4098a8b2d24f44769_400x260_crop.jpg',
	'dog-1027549_1280-609x419.jpg',
	'download__4_.jpeg',
	'enhanced-buzz-24275-1422388794-7.jpg',
	'f5b6572a2427c3fe5c6a5250438e5ee7.jpg',
	'file_21702_impossibly-cute-puppy-30-1280x720.jpg',
	'file-20171023-1748-12q4hco.jpg',
	'file.mobile_banner.jpg',
	'GettyImages-183042143.jpg',
	'GettyImages-457103246.jpg',
	'GettyImages-497801064-acd6050.jpg',
	'GettyImages-590487650-289b61d.jpg',
	'GettyImages-900604650.jpg',
	'gettyimages-1066935970.jpg',
	'greatest-running-tips-of-all-time_s.jpg',
	'happy-baby-300x300.jpg',
	'hero_bg.jpg',
	'hill-runner.jpg',
	'hoka-carbon-runningshoe_s.jpg',
	'how-to-calm-a-restless-baby_YF.jpg',
	'how-to-deal-with-crying-twins-722x406.jpg',
	'HPPuppies-1-of-5-400x300.jpg',
	'hqdefault copy.jpg',
	'hqdefault.jpg',
	'Human-Male-White-Newborn-Baby-Crying.jpg',
	'image-20160825-6595-981zwe.jpg',
	'image.jpeg',
	'image.jpg',
	'image0.jpeg',
	'image1.jpeg',
	'image2.jpeg',
	'image3.jpeg',
	'image4.jpeg',
	'image5.jpeg',
	'image6.jpeg',
	'image7.jpeg',
	'image8.jpeg',
	'image9.jpeg',
	'image10.jpeg',
	'image11.jpeg',
	'image12.jpeg',
	'image13.jpeg',
	'image14.jpeg',
	'image15.jpeg',
	'image16.jpeg',
	'image17.jpeg',
	'image18.jpeg',
	'image19.jpeg',
	'image20.jpeg',
	'image21.jpeg',
	'image22.jpeg',
	'image23.jpeg',
	'image24.jpeg',
	'image25.jpeg',
	'image26.jpeg',
	'image27.jpeg',
	'image28.jpeg',
	'image29.jpeg',
	'image30.jpeg',
	'image31.jpeg',
	'image32.jpeg',
	'image33.jpeg',
	'image34.jpeg',
	'image35.jpeg',
	'image36.jpeg',
	'image37.jpeg',
	'image38.jpeg',
	'image39.jpeg',
	'image40.jpeg',
	'image41.jpeg',
	'image42.jpeg',
	'image43.jpeg',
	'image44.jpeg',
	'image45.jpeg',
	'image46.jpeg',
	'image47.jpeg',
	'image48.jpeg',
	'image49.jpeg',
	'image50.jpeg',
	'image51.jpeg',
	'image52.jpeg',
	'image53.jpeg',
	'images.jpg',
	'images0.jpg',
	'images1.jpg',
	'images2.jpg',
	'images3.jpg',
	'images4.jpg',
	'images5.jpg',
	'images6.jpg',
	'images7.jpg',
	'images8.jpg',
	'images9.jpg',
	'images10.jpg',
	'images11.jpg',
	'images12.jpg',
	'images13.jpg',
	'images14.jpg',
	'images15.jpg',
	'images16.jpg',
	'images17.jpg',
	'images18.jpg',
	'images19.jpg',
	'images20.jpg',
	'images21.jpg',
	'images22.jpg',
	'images23.jpg',
	'images24.jpg',
	'images25.jpg',
	'images26.jpg',
	'images27.jpg',
	'images28.jpg',
	'images29.jpg',
	'images30.jpg',
	'images31.jpg',
	'images32.jpg',
	'images33.jpg',
	'images34.jpg',
	'images35.jpg',
	'images36.jpg',
	'images37.jpg',
	'images38.jpg',
	'images39.jpg',
	'images40.jpg',
	'images41.jpg',
	'images42.jpg',
	'images43.jpg',
	'images44.jpg',
	'images45.jpg',
	'images46.jpg',
	'images47.jpg',
	'images48.jpg',
	'images49.jpg',
	'images50.jpg',
	'images51.jpg',
	'Impossibly-Cute-Puppies-36.jpg',
	'impossibly-cute-puppy-2.jpg',
	'impossibly-cute-puppy-cute-puppies-14593488214nk8g.jpg',
	'iStock-636475496.jpg',
	'Jenny_Running.jpg',
	'jogging-and-running-outdoors-in-nature_527013196.jpg',
	'kids-running-raising-rippers_h.jpg',
	'lab-too-cute-puppies-01-625x450-1.jpg',
	'lab-too-cute-puppies-02-625x450-1.jpg',
	'landscape-1498079619-puppies-cuddling.jpg',
	'large-group-of-athletes-talking-while-having-a-road-royalty-free-image-1568746096.jpg',
	'lead_720_405.jpg',
	'lead_720_4050.jpg',
	'long-distance-marathon-running-shoes.jpg',
	'LongrunFEATURE.jpg',
	'Ludovic_and_Lauren_28842551506929.jpg',
	'man-running.jpg.653x0_q80_crop-smart.jpg',
	'Master.jpg',
	'maxresdefault.jpg',
	'maxresdefault0.jpg',
	'maxresdefault1.jpg',
	'maxresdefault2.jpg',
	'mean-puppy1.jpg',
	'mean-puppy2.jpg',
	'MENSRUN_header_600x600_crop_center.jpg',
	'morning-exercise-royalty-free-image-534609714-1558470117.jpg',
	'pano-commentvotrepoidsinfluev2.jpg',
	'person-running.jpg',
	'photo.jpg',
	'photo0.jpg',
	'photo1.jpg',
	'photo2.jpg',
	'photo3.jpg',
	'Polar-Running-pace-calculator_hero.jpg',
	'pomeraninan-puppy.jpg',
	'puppies.jpg',
	'puppy-1903313__340.jpg',
	'puppy-cute-today-180515-main_a936531048fdb698635dd1b418abdee9.fit-760w.jpg',
	'puppy-vs-stairs.png.480x0_q71_crop-scale.jpg',
	'run-2.jpg',
	'Run-club-woman-running.jpg',
	'running_16x9_0.jpg',
	'running_hat.jpg',
	'Running_SP19_CategoryBanners-Mens_Desktop_Vuori.jpg',
	'Running-a-Mile-Race-GQ-2019-071019.jpg',
	'running-band-technique_resize_md.jpg',
	'running-collection.jpg',
	'Running-Faster.jpg',
	'running-fw19-evergreen-clp-crm-desktop_tcm221-328877.jpg',
	'running-heat-tips.jpg',
	'running-index-intro-bg-desktop.jpg',
	'running-inspiration-transformation-determination-1440x9999.jpg',
	'running-is-one-of-the-best-ways-to-stay-fit-royalty-free-image-1568757836.jpg',
	'Running-power-is-here_hero.jpg',
	'running-program-intro-bg-desktop.jpg',
	'running-rex.jpg',
	'running-street-1280.jpg',
	'running-sydney_wide-66de7af7e96461730a2d63d24d3c1af426af2610-s800-c85.jpg',
	'Running-Tips-960x430.jpg',
	'running.jpg',
	'runningstock0511a.jpg',
	'S19_LP_Run-It-Forward_1_LH-B_L_new.jpg',
	'samoyed_cute_puppies.jpg',
	'senior-man-running-through-woodland-royalty-free-image-1568835061.jpg',
	'sheltie_cute_puppies.jpg',
	'shiba_inu_cute_puppies.jpg',
	'shutterstock_688527661-900x506.jpg',
	'siberian_husky_cute_puppies.jpg',
	'sleepingpuppy_1458691237031_3320353_ver1.0_1280_720.jpg',
	'Slide1.jpg',
	'st-bernard-puppy.jpg',
	'start-running-1561727350.jpg',
	'sub-buzz-5195-1542739740-5.jpg',
	'sub-channel-fitness-running.jpg',
	'sunrise-runner.jpg',
	'TELEMMGLPICT000193856447_trans_NvBQzQNjv4BqpVlberWd9EgFPZtcLiMQfyf2A9a6I9YchsjMeADBa08.jpeg',
	'TELEMMGLPICT000194354820_trans_NvBQzQNjv4BqpVlberWd9EgFPZtcLiMQfyf2A9a6I9YchsjMeADBa08.jpeg',
	'tmp_W8D5mS_06e8f3724b6c718f_GettyImages-600646422.jpg',
	'trail-run-1564606019.jpg',
	'TrainingHub_D01.jpg',
	'two-cute-puppies-as-worlds-cutest-dogs-1024x512.jpg',
	'Wallpaper-Android-Cute-Puppies-Pictures.jpg',
	'Wallpapers-Cute-Puppies-Pictures.jpg',
	'what-to-wear-when-running.jpg',
	'whiteschnauzerpuppy.jpg',
	'Why-Do-Fit-Runners-Suddenly-Die-While-Running-Marathons-thumb.jpg',
	'woman_Running-1200x628-facebook.jpg',
	'woman-hand-on-leg.jpg',
	'wpid-article-1315861408795-0dd86b6600000578-457728_636x468.jpg',
	'811hvGypcPL._SY355_.png',
	'commonweightmistakes.png',
	'image.png',
	'image0.png',
	'On-Running-Apparel.png',
	'puppers4.png',
	'really-cute-puppies-golden-retriever-playing-37360609.png',
	'sns.png'
];

function textcolorChange() {
	console.log('text color being changed now');
	var words = document.getElementsByTagName('p');
	for (var i = 0; i < words.length; i++) {
		words[i].style['color'] = '#c2c5cc';
	}
}

function textChange() {
	console.log('text being changed now');
	var pageText = document.getElementsByTagName('h2');
	for (var i = 0; i < pageText.length; i++) {
		pageText[i].innerHTML = 'lorem ipsum dolor sit amet';
	}
	var pageText2 = document.getElementsByTagName('h3');
	for (var i = 0; i < pageText2.length; i++) {
		pageText2[i].innerHTML = 'you look thirsty! maybe time for a break.';
	}
}

function fontChange() {
  console.log('font being changed');
  var allText = document.getElementsByTagName('p');
  for (var i = 0; i < allText.length; i++) {
    allText[i].style.transform = "rotate(180deg)";
  }
}

function fontChange2() {
  console.log('font being changed');
  var allText = document.getElementsByTagName('h1');
  for (var i = 0; i < allText.length; i++) {
    allText[i].style.transform = "rotate(180deg)";
  }
}

function drawTime() {
	var p5Pen = function(sketch) {
		sketch.setup = function() {
			document.body.style['user-select'] = 'none';
			let canvHeight = document.body.clientHeight;
			let canv = sketch.createCanvas(sketch.windowWidth, canvHeight);
			canv.position(0,0);
			canv.style('pointer-events', 'none');
			sketch.clear();
		}

		sketch.draw = function() {
			sketch.stroke('#FF0000');
			sketch.strokeWeight(3);
			sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
		}
	};
	// make a new p5 item, make a wrapper function with setup and draw attached to it
	var myp5 = new p5(p5Pen);
}

function blockPage() {
	document.body.style['display'] = 'none';
}


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
  if(message.msgtxt === "glitch1"){
    //do something
    console.log(message.msgtxt + " has been received");
    imageFilter();
  }
  if (message.msgtxt === "glitch2"){
    console.log(message.msgtxt + " has been received");
    fontChange();
  }
  if (message.msgtxt === "glitch3"){
    console.log(message.msgtxt + " has been received");
    fontChange2();
  }
  if (message.msgtxt === "glitch4"){
    console.log(message.msgtxt + " has been received");
    textChange();
  }
  if (message.msgtxt === "glitch5"){
    console.log(message.msgtxt + " has been received");
    drawTime();
  }
  if (message.msgtxt === "glitch6"){
    console.log(message.msgtxt + " has been received");
    textcolorChange();
  }
  if (message.msgtxt === "glitch7"){
    console.log(message.msgtxt + " has been received");
    blockPage();
  }
}


