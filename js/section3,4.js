// section4 이미지 애니메이션
$("#charNameList").slick({ 
            infinite: true,
            autoplay: true, autoplaySpeed: 1500,
            slidesToShow: 4, slidesToScroll: 1,
            variableWidth: true,
            reponsive: [
                {
                    breakpoint: 1326,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3, slidesToScroll: 1,
                        variableWidth: true
                }},
                {
                    breakpoint: 767,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1,
                        variableWidth: true
                        }
                }
            ]

        });

