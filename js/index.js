$(function () {
    var layer = layui.layer;
    var form = layui.form;
    var img = null;
    $('.aiwo').click(function () {
        $('.lay').show();
        $('.anniu').show();
    })
    $('.sygz-fh').click(function () {
        $('.lay').hide();
        $('.anniu').hide();
    })
    $('.sygz-x').click(function () {
        $('.lay').hide();
        $('.lay-one').show();
    })
    $('.sygz-iptText').click(function () {
        $('.lay-text').val('').hide();
        $(this).hide();
        $('.lay-text').show().focus();
    })
    $('.lay-text').blur(function () {
        if ($('.lay-text').val().trim() == '') {
            $('.sygz-iptText').show();
            $(this).hide();
        }
    })
    $('.sygz-xinTai').click(function () {
        $('.lay-text').val('').hide();
        $('.lay-text').show().focus().val('心态');
        $('.sygz-iptText').hide();
    })
    $('.sygz-aiQing').click(function () {
        $('.lay-text').val('').hide();
        $('.lay-text').show().focus().val('爱情');
        $('.sygz-iptText').hide();
    })
    $('.sygz-nianQing').click(function () {
        $('.lay-text').val('').hide();
        $('.lay-text').show().focus().val('年轻');
        $('.sygz-iptText').hide();
    })
    $('.sygz-schb').click(function () {
        $('.sygz-iptText').hide();
        $('.lay-text').show().focus();
        var val = $('.lay-text').val().trim();
        if (val == '') {
            alert('请输入内容');
            return false;
        }
        $('.anniu').hide();
        $('.lay-one').hide();
        $('.lay-two').show();
    })
    $('.ul-one li').click(function () {
        $(this).children().first().hide();
        $(this).children().first().next().show();
        $(this).children().first().next().next().show();
        $(this).addClass('yonglai').siblings().removeClass('yonglai')
        $.each($(this).siblings(), function (i, itm) {
            $(itm).children().first().show();
            $(itm).children().first().next().hide();
            $(itm).children().first().next().next().hide();
        })
    })

    $('.sygz-xiangji').click(function () {
        $('#file').click();
    })
    $('#file').on('change', function () {
        var image = $('#file')[0].files;
        // var fd = new FormData();
        // console.log(image);

        // fd.append('avatar', image[0]);
        // console.log(fd);
        // $.ajax({
        //     type: 'post',
        //     url: 'http://www.liulongbin.top:3006/api/upload/avatar',
        //     data: fd,
        //     contentType: false,
        //     processData: false,
        //     success: function (res) {
        //         var srcs = 'http://www.liulongbin.top:3006' + res.url;
        //         $('.xkbg img').attr('src', srcs);
        //         $('.meizhao img').attr('src',srcs)
        //     }
        // })
        var reader = new FileReader();
        reader.onload = function () {
            $('.xkbg .jietu').attr('src', reader.result);
        }
        reader.readAsDataURL(image[0]);

    });


    var leftPage = 0;
    var topPage = 0;
    var leftPage1 = 0;
    var topPage1 = 0;
    var leftc = 0;
    var topc = 0;
    $('.xkbg .jietu').on('touchstart', function (e) {
        leftPage = e.targetTouches[0].clientX;
        topPage = e.targetTouches[0].clientY;

        var l = $('.xkbg .jietu').position().left;
        var t = $('.xkbg .jietu').position().top;

        leftc = leftPage - l;
        topc = topPage - t;
        console.log(leftPage, topPage, l, t, leftc, topc);
    })

    $('.xkbg').on('touchmove', function (e) {
        leftPage1 = e.targetTouches[0].clientX;
        topPage1 = e.targetTouches[0].clientY;
        var le = $('.xkbg').position().left;
        var to = $('.xkbg').position().top;
        $('.xkbg .jietu').css({ 'left': leftPage1 - leftc + le + 'px', 'top': topPage1 - topc + to + 'px' })
    });

    $('.sygz-qrsc').click(function () {

        var image = $('#file')[0].files;
        if (image.length > 0) {
            html2canvas(document.querySelector('.yonglai .xkbg'), {
                useCORS: true,
            }).then((canvas) => {
                // img = new Image();
                // img.src = canvas.toDataURL("image/png");
                // console.log(img.src);
                // var reader = new FileReader();
                // reader.onload = function () {
                //     $('.meizhao img').attr('src', reader.result);
                // }
                // reader.readAsDataURL(canvas);
                $('.meizhao img').attr('src',canvas.toDataURL("image/png"))
                // $('.meizhao').html(canvas)

                // convertCanvasToImage()
                // function convertCanvasToImage(canvas) {
                //     var image = new Image();
                //     image.src = canvas.toDataURL("image/png");
                //     console.log(image);
                //     return image;
                // }
            });
            $('.lay-shree').show();
            $('.lay-two').hide();
        } else {
            return layer.msg('请上传图片');
        }
    });

    $('.cahnganbaocun').click(function() {
        $('.meizhao a').click()
    })
    data = {
        arr: [
            {
                head: 'img/head',
                weixinName: '微信昵称',
                rank: 1,
                likeNum: 128,
            },
            {
                head: 'img/head1',
                weixinName: '微信昵称',
                rank: 2,
                likeNum: 105,
            },
            {
                head: 'img/head2',
                weixinName: '微信昵称',
                rank: 3,
                likeNum: 96,
            },
            {
                head: 'img/head3',
                weixinName: '微信昵称',
                rank: 3,
                likeNum: 65,
            },
            {
                head: 'img/head4',
                weixinName: '微信昵称',
                rank: 3,
                likeNum: 52,
            },
            {
                head: 'img/head5',
                weixinName: '微信昵称',
                rank: 3,
                likeNum: 46,
            },
        ]
    }
    var htmlStr = template('tpl-four', data);
    $('.lay-ul').html(htmlStr);

    $('body').on('click', '.dz img', function () {
        $(this).hide().siblings().show();
    })
    $('.woyeyaowan').click(function () {
        $('.lay-four').hide();
    })
    $('.paihangbang').click(function () {
        $('.lay-four').show();
        $('.lay-shree').hide();
    })
})