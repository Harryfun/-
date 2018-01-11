$(function(){
	$("#fullpage").fullpage({
		verticalCentered: false,
		navigation: true,
		afterLoad: function(linkName,index){
			if(index == 2){
				// 空搜索框向左位移
				$(".s2_empty_search").animate({
					right: "50%",
					marginRight: "-111px"
				},1000,"easeOutBack",function(){
					$(".s2_search_word").fadeIn(1000,function(){
						$(".s2_empty_search,.s2_search_word").hide();
						$(".s2_full_search").show().animate({
							bottom: 450,
				            left: "69%",
				            height: 30
						},1000);
						$(".s2_sofas").show().animate({
							left: "28%",
    						bottom: 210,
    						width: 441
						},1000)
						$(".s2_title2").fadeIn(1000);
						$(".s2_title1").fadeOut(1000);
					});
				});
			}
			if(index == 5){
				$(".s5_hand").animate({
					bottom:0
				},1000,function(){
					$(".s5_mouse1").show();
					$(".s5_mouse2").fadeIn(1000);
					$(".s5_sofa").animate({
					bottom:208
				},1000,function(){
					$(".s5_bill").animate({
						bottom:523
					},1000,function(){
						$(".s5_word").addClass("s5_word_active")
					})
				})
				})
			}
			if(index == 7){
				$(".s7_star").animate({
					width:122
				},1000,function(){
					$(".s7_good").fadeIn(600);
				})
			}
			if(index == 8){
				$(".s8_png").on("mouseenter",function(){
					$(".s8_gif").show();
					$(".s8_png").hide();
				});
				$(".s8_gif").on("mouseleave",function(){
					$(".s8_png").show();
					$(".s8_gif").hide();
				});
				$(document).mousemove(function(e){
					var x = e.pageX-60;
					var y = e.pageY+20;
					var k = $(".s8").height();
					if(y < k - 449){
						y = k - 449;
					}
					$(".s8_hand").css({"left":x,"top":y});
				});
				$(".s8_again").on("click",function(){
					$.fn.fullpage.moveTo(1);
					$(".section *").attr("style","");
					$(".s6").css({
			            backgroundPositionX: "25%"
			          });
					$(".s5_word").removeClass("s5_word_active");
				})
			}
		},
		// 离开后触发
		onLeave: function(index,nextIndex,direction){
			if(index == 2 && nextIndex == 3){
				$(".s2_wrap").show();
				$(".s3_sofa").show().animate({
					bottom: "34%",
    				left: "26.6%",
    				width: 207
				},1500,function(){
					$(".s3_white_car,.s3_size2").fadeIn(1000);
					$(".s3_black_car,.s3_size1").hide;
				})
			}
			if(index == 3 && nextIndex == 4){
				var height = $(".s4").height();
				var ownBottom = parseInt($(".s4_sofa").css("bottom"));
				var bottom = ownBottom + height + 400;
				$(".s4_sofa").css({
					bottom: bottom,
					left: -38
				});
				$(".s3_sofa").hide();
				$(".s4_sofa").animate({
					bottom: 184,
					left: 134
				},2000,function(){
					var x = $(".s4_full_car").offset().left;
					var leftMargin = $(".s4").width() - x + 50;
					$(".s4_full_car").animate({
						marginLeft: leftMargin
					},2500,"easeInOutElastic",function(){
						$(".s4_title1").fadeOut(1000);
						$(".s4_title2").fadeIn(1000);
						$(".s4_address").fadeIn(1000);
					})
				})
			}
			if(index == 5 && nextIndex == 6){
				// 1.第五屏沙发隐藏 第六屏沙发显示
				// 2.第六屏沙发和盒子在同一位置后 隐藏沙发 盒子向下掉
				// 3.掉到卡车里 隐藏盒子 移动背景

				$(".s5_sofa").hide();
				$(".s6_sofa").animate({
					left: "29%",
					bottom: "59%",
					width: 50
				},1800);
				$(".s6_box").animate({
					left: "27%"
				},1300,function(){
					$(".s6_sofa").hide();
					$(".s6_box").animate({
						bottom: "4%"
					},1400,function(){
						$(".s6").animate({
						"backgroundPositionX" : "100%"
					},2000);
						$(".s6_address").show();
						$(".s6_title").animate({
							left: "30%"
						},2000,"easeInOutElastic",function(){
							$(".s6_boys").animate({
								width: 252,
								bottom: 112
							},1000,function(){
								$(".s6_boys").animate({left:"45%"},1000,function(){
									$(".s6_door").show();
									$(".s6_girl").animate({
										right: 450,
									    width: 85
									},1500,function(){
										$(".s6_confirm").fadeIn(500);
									})
								})
							})
						})
					});
				})
			}
		}
	});
	$(".downdown").on("click",function(){
		$.fn.fullpage.moveSectionDown();
	})
})