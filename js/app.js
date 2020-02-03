const homeContainer = document.getElementById('homeContainer');
const moreInfo = document.getElementById('moreInfo');
const homeButtons = document.getElementById('home-button-group')
///////////////////////////////////////////////////////////
//////////////////////// HOME PAGE ////////////////////////
///////////////////////////////////////////////////////////
const closeMoreInfo = document.getElementById('close');
const moreInfoHeader = document.getElementById('moreInfoHeader');
const moreInfoText = document.getElementById('moreInfoText');
//homescreen buttons 
const learnMore = document.getElementById('learn-more');
const getStarted = document.getElementById('get-started');
const github = document.getElementById('github');

//hides on load
moreInfoHeader.style.display = "none";
moreInfoText.style.display = "none";
closeMoreInfo.style.display = "none";


//homepage animation
window.setTimeout(function() {
	homeContainer.style.opacity = '1';
}, 800)
//home page buttons
homeButtons.addEventListener('click', function(e) {
	// show more info section
	if (e.target.classList.contains('learnmore')) {
		showInfo();
	// get started
	} else
	if (e.target.classList.contains('getstarted')) {
		start();
	// link to the source code
	} else 
	if (e.target.classList.contains('github')) {
		//github link
	}
});
//closing more info 
closeMoreInfo.addEventListener('click', function() {
	hideInfo();
});

//homepage functions

//more info functions
function showInfo() {
	moreInfo.style.height = "200px";
  	moreInfo.style.opacity = "1";
  	moreInfoHeader.style.display = "initial";
  	moreInfoText.style.display = "initial";
  	closeMoreInfo.style.display = "initial";
}
function hideInfo() {
	moreInfo.style.height = '0';
	moreInfo.style.opacity = '0';
  	moreInfoHeader.style.display = "none";
  	moreInfoText.style.display = "none";
  	closeMoreInfo.style.display = "none";
}

//get started function
function start() {
	homeContainer.style.opacity = "0";
	window.setTimeout(function() { 
		homeContainer.style.display = 'none';
	}, 1000)
	window.setTimeout(function() {
		flexGenContainer.style.display = "flex";
	}, 800)
	window.setTimeout(function() {
    flexGenContainer.style.opacity = "1";
  }, 1500);	
}
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////







///////////////////////////////////////////////////////////
//////////////////////// FLEX GEN /////////////////////////
///////////////////////////////////////////////////////////
const flexGenContainer = document.getElementById('flex-gen-container');
const settings = document.getElementById('settings-panel');
const flexGen = document.getElementById('flex-gen');
//
const infoToggleClassName = document.getElementById("info-toggle-classname"); 
const infoClassNameToggle = document.getElementById('information-toggle-class-name');
const closeInfo = document.getElementById('close-class-name-info');


$infoToggleClassName = $('.information-toggle-class-name')
//hides on load
flexGenContainer.style.display = 'none';
flexGenContainer.style.opacity = '0'
settings.style.display = 'none';

//info toggle
infoToggleClassName.addEventListener('click', function() {
	$infoToggleClassName.slideDown();
	$(".info-text").text("In order for elements to be structured using flex-box, we will need to create a parent element (container) for the child elements. Let's start by giving the container a class name.");
})
$('.elementnumber-info').on('click', function() {
	$infoToggleClassName.slideDown();
	$(".info-text").text(
		"These elements will be the child elements of the parent (container) class you just created. These will be directly affected by the flex properties."
  );
})
// closing info toggle
infoClassNameToggle.addEventListener('click', function() {
	$infoToggleClassName.slideUp();
});

const containerName = [];
const elementCount = [];
// CONTAINER CLASS NAME 
const classNameRegex = new RegExp("^[_a-zA-Z-]+[_a-zA-Z0-9-]$");
$(".container-name-btn").on('click', function() {
	if ($(".container-name").val() == "") {
	 $('.error-message').delay(800).slideDown();
	 $('.flex-gen').addClass('shake-error');
  } else 
  		if ( $('.container-name').val().match(classNameRegex) ) {
			$(".information-toggle-class-name").slideUp();
			$('.error-message').slideUp();
			$('.class-name-div').delay(500).slideUp();
			$('.element-number-div').delay(1000).slideDown();
			containerName.push($('.container-name').val());
			console.log('Container class name: ' + containerName[0])
		  } else 
		  		if ( !$('.container-name').val().match(classNameRegex)) {
					  	$('.error-message').text('Must be a valid class name');
						$('.error-message').delay(800).slideDown();
	 					$('.flex-gen').addClass('shake-error');
  				}
});
// CHILD ELEMENT INPUT FUNCTIONALITY
$('.child-elements-btn').on('click', function() {
	if ( validNumber($('.child-elements').val())) {
			$('.error-message').delay(800).slideUp();
			elementCount.push($('.child-elements').val());
			console.log('Element amount: ' + elementCount[0]);
			closeOptions();
			window.setTimeout(function() {
				loadContent();
			}, 2500)
			
	} else
	if ($('.child-elements').val() == "") {
		$('.error-message').delay(800).slideDown();
		$('.error-message').css('width', '75%');
		$('.error-message').text("Please enter a number 2-10.")
	 	$('.flex-gen').addClass('shake-error');
	} else 
		if ( !validNumber($('.child-elements').val())) {
      $(".flex-gen").addClass("shake-error");
      $(".error-message")
        .delay(800)
        .slideDown();
      $(".error-message").css("width", "75%");
      $(".error-message").text("Please enter a number 2-5 only.");
    }
});
// conditionals


// correct number of child elements
function validNumber(number) {
	return number > 1 && number < 6;
}
function closeOptions() {
	$(".information-toggle-class-name").slideUp();
	$('.success-message').fadeIn();
	$('.options').slideUp();
	$(".flex-gen-fox").addClass('transition-out');
	window.setTimeout(function() {
		$(".flex-gen-fox").css("transition", "none");
	}, 1000);
	$('.flex-gen-fox').delay(2000).fadeOut();
	$('.success-message').delay(1500).fadeOut();
	$('.settings-panel').delay(2500).fadeIn();
	window.setTimeout(function() {
	$('.flex-gen').fadeIn();
	$('.flex-gen').css('height', '85%');
	$('.flex-gen').css('width', '70%');
	}, 2500);
}

// removeing shake error class after animation
$('.flex-gen').on('animationend', function() {
	$('.flex-gen').removeClass('shake-error');
});

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////
/////////////// SIDE BAR FUNCTIONALITY/////////////////////
///////////////////////////////////////////////////////////
const $display = $('.display');
const $direction = $('.flex-direction');
const $wrapper = $('.flex-wrap');
const $justify = $('.justify-content');
const $align = $('.align-items');
const $basis = $('.flex-basis');

// hide all prop options
$('.prop-btns').hide();
const arrowIcon = document.querySelectorAll('.fa-sort-down');
// displaying options based on user clicks
$('.display-div').on('click', function(e) {
		closeOtherOptions();
	if ( $display.is(':visible')) {
		$display.slideUp(300);
		arrowIcon[0].style.transform = 'none';
	} else {
		$display.slideDown(300);
		arrowIcon[0].style.transform = 'rotate(540deg)';
	}
});
// flex-direction option
$('.direction-div').on('click', function(e) {
		closeOtherOptions();
		
	if ( $direction.is(':visible')) {
		$direction.slideUp(300);
		arrowIcon[1].style.transform = "none";
	} else {
		$direction.slideDown(300);
		arrowIcon[1].style.transform = "rotate(540deg)";
	}
});
// wrapper option
$('.wrapper-div').on('click', function() {
	closeOtherOptions();
	if ( $wrapper.is(':visible')) {
		$wrapper.slideUp(300);
		arrowIcon[2].style.transform = "none";
	} else {
		$wrapper.slideDown(300);
		arrowIcon[2].style.transform = "rotate(540deg)";
	}
});
// justify-content option
$('.justify-div').on('click', function() {
	closeOtherOptions();
	if ( $justify.is(':visible')) {
		$justify.slideUp(300);
		arrowIcon[3].style.transform = "none";
	} else {
		$justify.slideDown(300);
		arrowIcon[3].style.transform = "rotate(540deg)";
	}
});
// align-items option
$('.align-div').on('click', function() {
	closeOtherOptions();
	if ( $align.is(':visible')) {
		$align.slideUp(300);
		arrowIcon[4].style.transform = "none";
	} else {
		$align.slideDown(300);
		arrowIcon[4].style.transform = "rotate(540deg)";
	}
});
// flex-basis option
$('.basis-div').on('click', function() {
	closeOtherOptions();
	if ( $basis.is(':visible')) {
		$basis.slideUp(300);
		arrowIcon[5].style.transform = "none";
	} else {
		$basis.slideDown(300);
		arrowIcon[5].style.transform = "rotate(540deg)";
	}
});

function closeOtherOptions() {
	for ( let i = 0; i < $('.fa-sort-down').length; i ++ ) {
		arrowIcon[i].style.transform = "none";
	}
	$([ $display, $direction, $wrapper, $justify, $align, $basis ]).each(function() {
		$(this).slideUp(300);
	});
}

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////






///////////////////////////////////////////////////////////
////////////////// OVERLAY AND CODE OUTPUT ////////////////
///////////////////////////////////////////////////////////
const $overlay = $('.overlay');
const $modal = $('.modal');
const $codeContainer = $('.code-container');
const $codeOutput = $('.code-output');

$overlay.hide();
$modal.hide();

function generateCode() {
  const $className = $(".class-name-output");
  const $childName = $('.child-name');
  $className.text('.' + containerName[0]);
  $childName.text('.child_element_1')
}

$codeOutput.on('click', function() {
	generateCode();
	$overlay.fadeIn();
	$modal.delay(500).slideDown();
	$('.flex-gen-container').css('filter', 'blur(2px)')
})

const $flexContainer = $('.flex-gen-container');
$overlay.on('click', function(e) {
	if ( e.target.classList.contains('overlay') || e.target.classList.contains('modal-close')) {
		$modal.slideUp();
		$(this).delay(500).fadeOut();
		window.setTimeout(function() {
			$flexContainer.css("filter", "none");
		}, 500)		
	}
});
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////
///////////////// CREATING CHILD ELEMENTS /////////////////
///////////////////////////////////////////////////////////

function loadContent() {
	let flexChildren = '';
	const numberOfElements = elementCount[0];
	for ( let i = 1; i <= numberOfElements; i ++ ) {
		flexChildren += '<div class="flex-child"><h2 class="flex-header">Child ' + i + '</h2></div>'
	}
	$(".flex-child-container").html(flexChildren);
}


///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////





///////////////////////////////////////////////////////////
///////////////// SIDE PANEL OPTIONS //////////////////////
///////////////////////////////////////////////////////////

const $settings = $('.settings-panel');
const $flexy = $('.flex-child-container');
const $radio = $('.radio');

// toggle radio buttin active states 
// flex-direction
$(".prop-btns")[1].addEventListener("click", function(e) {
  for (let i = 1; i <= $(".flex-direction .radio").length; i++) {
    if (
      e.target.textContent == "row;" ||
      e.target.classList.contains("row-click")
    ) {
      $flexy.css("flex-direction", "row");
      $radio[i].classList.remove("active-radio");
		$radio[1].classList.add("active-radio");
		$('.val')[1].innerText = 'row;';
    } else if (
      e.target.textContent == "column;" ||
      e.target.classList.contains("col-click")
    ) {
      $flexy.css("flex-direction", "column");
      $radio[i].classList.remove("active-radio");
		$radio[2].classList.add("active-radio");
		$(".val")[1].innerText = "column;";
    }
  }
});
// flex-wrap
$(".prop-btns")[2].addEventListener("click", function(e) {
  for (let i = 3; i <= 4; i++) {
	  if (e.target.textContent == 'nowrap;' || e.target.classList.contains('nowrap-click') && $radio[1].classList.contains('active-radio')) {
		wrapResizeRow();
		$(".val")[2].innerText = "nowrap;";
	 } else
	 if (e.target.textContent == 'wrap;' || e.target.classList.contains('wrap-click') && $radio[1].classList.contains('active-radio')) {
		wrapResizeRow();
		$(".val")[2].innerText = "wrap;";
	 } else
	 if (e.target.textContent == 'nowrap;' || e.target.classList.contains('nowrap-click') && $radio[2].classList.contains('active-radio')) {
		wrapResizeCol();
		$(".val")[2].innerText = "nowrap;";
	 } else
	 if (e.target.textContent == 'wrap;' || e.target.classList.contains('wrap-click') && $radio[2].classList.contains('active-radio')) {
		wrapResizeCol();
		$(".val")[2].innerText = "wrap;";
	 }
    if (
      e.target.textContent == "nowrap;" ||
      e.target.classList.contains("nowrap-click")
    ) {
      $flexy.css("flex-wrap", "nowrap");
      $radio[i].classList.remove("active-radio");
		$radio[3].classList.add("active-radio");
    } else if (
      e.target.textContent == "wrap;" ||
      e.target.classList.contains("wrap-click")
    ) {
      $flexy.css("flex-wrap", "wrap");
      $radio[i].classList.remove("active-radio");
		$radio[4].classList.add("active-radio");
	 }
  }
});
// justify-content 
$('.prop-btns')[3].addEventListener('click', function(e) {
	for ( let i = 5; i <= 10; i ++ ) {
		if ( e.target.textContent == 'flex-start;' || e.target.classList.contains('fs-click')) {
			$flexy.css('justify-content', 'flex-start');
			$radio[i].classList.remove('active-radio');
			$radio[5].classList.add('active-radio');
			$(".val")[3].innerText = "flex-start;";
		} else 
		if ( e.target.textContent == 'center;' || e.target.classList.contains('center-click')) {
			$flexy.css('justify-content', 'center');
			$radio[i].classList.remove('active-radio');
			$radio[6].classList.add('active-radio');
			$(".val")[3].innerText = "center;";
		} else
		if ( e.target.textContent == 'space-between;' || e.target.classList.contains('sb-click')) {
			$flexy.css('justify-content', 'space-between');
			$radio[i].classList.remove('active-radio');
			$radio[7].classList.add('active-radio');
			$(".val")[3].innerText = "space-between;";
		} else
		if ( e.target.textContent == 'space-around;' || e.target.classList.contains('sa-click')) {
			$flexy.css('justify-content', 'space-around');
			$radio[i].classList.remove('active-radio');
			$radio[8].classList.add('active-radio');
			$(".val")[3].innerText = "space-around;";
		} else
		if ( e.target.textContent == 'space-evenly;' || e.target.classList.contains('se-click')) {
			$flexy.css('justify-content', 'space-evenly');
			$radio[i].classList.remove('active-radio');
			$radio[9].classList.add('active-radio');
			$(".val")[3].innerText = "space-evenly;";
		} else
		if (e.target.textContent == 'flex-end;' || e.target.classList.contains('fe-click')) {
			$flexy.css('justify-content', 'flex-end');
			$radio[i].classList.remove('active-radio');
			$radio[10].classList.add('active-radio');
			$(".val")[3].innerText = "flex-end;";
		}
	}
});
$('.prop-btns')[4].addEventListener('click', function(e) {
	for ( let i = 10; i <= 15; i ++ ) {
		if ( e.target.textContent == 'stretch;' || e.target.classList.contains('stretch-click')) {
			$flexy.css('align-items', 'stretch');
			$radio[i].classList.remove('active-radio');
			$radio[11].classList.add('active-radio');
			$(".val")[4].innerText = "stretch;";
		} else
		if ( e.target.textContent == 'center;' || e.target.classList.contains('cent-click')) {
			$flexy.css('align-items', 'center');
			$radio[i].classList.remove('active-radio');
			$radio[12].classList.add('active-radio');
			$(".val")[4].innerText = "center;";
		} else
		if ( e.target.textContent == 'flex-start;' || e.target.classList.contains('f-s-click')) {
			$flexy.css('align-items', 'flex-start');
			$radio[i].classList.remove('active-radio');
			$radio[13].classList.add('active-radio');
			$(".val")[4].innerText = "flex-start;";
		} else
		if ( e.target.textContent == 'flex-end;' || e.target.classList.contains('f-e-click')) {
			$flexy.css('align-items', 'flex-end');
			$radio[i].classList.remove("active-radio");
			$radio[14].classList.add('active-radio');
			$(".val")[4].innerText = "flex-end;";
		} else
		if ( e.target.textContent == 'baseline;' || e.target.classList.contains('base-click')) {
			$flexy.css('align-items', 'baseline');
			$radio[i].classList.remove("active-radio");
			$radio[15].classList.add('active-radio');
			$(".val")[4].innerText = "baseline;";
		}
	}
});
$('.prop-btns')[5].addEventListener('click', function(e) {
	for ( let i = 16; i <= 19; i ++ ) {
		if ( e.target.textContent == 'auto;' || e.target.classList.contains('basis-click')) {
			$(".flex-child")[0].style.flexBasis = "auto";
			$radio[i].classList.remove("active-radio");
			$radio[16].classList.add("active-radio");
			$('.val')[5].innerText = "auto;";
		} else
		if ( e.target.textContent == '100px;' || e.target.classList.contains('radio-100')) {
			$(".flex-child")[0].style.flexBasis = "100px";
			$radio[i].classList.remove("active-radio");
			$radio[17].classList.add("active-radio");
			$(".val")[5].innerText = "100px;";
		} else
		if ( e.target.textContent == '200px;' || e.target.classList.contains('radio-200')) {
			$('.flex-child')[0].style.flexBasis = '200px';
			$radio[i].classList.remove("active-radio");
			$radio[18].classList.add("active-radio");
			$(".val")[5].innerText = "200px;";
		} else
		if (e.target.textContent == '300px;' || e.target.classList.contains('radio-300')) {
			$(".flex-child")[0].style.flexBasis = "300px";
			$radio[i].classList.remove("active-radio");
			$radio[19].classList.add("active-radio");
			$(".val")[5].innerText = "300px;";
		}
	}

});

function wrapResizeRow() {
  $(".flex-gen").css("overflow", "auto");
  $(".flex-child").css({
    width: "300px"
  });
  $flexy.parent().css({
    width: "40%"
  });
  window.setTimeout(function() {
    $(".flex-gen").css("overflow", "initial");
    $flexy.parent().css({
      width: "70%"
    });
    $(".flex-child").css({
      width: "initial",
    });
  }, 3000);
}
function wrapResizeCol() {
	$('.flex-gen').css('overflow', 'auto');
	$('.flex-child').css({
		height: '200px',
	});
	$flexy.parent().css({
	height: "30%",
	});
	window.setTimeout(function() {
		$(".flex-gen").css("overflow", "initial");
		$flexy.parent().css({
			height: "85%",
		});
		$(".flex-child").css({
			height: "initial"
		});
	}, 3000);
}

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

