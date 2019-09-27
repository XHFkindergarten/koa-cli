const Router = require('koa-router')
const router = new Router()

router.get('/', async ctx => {
  ctx.body = {
    msg: 'get wxmini success!'
  }
})

router.post('/homePageContent', async ctx => {
  ctx.body = {
    swiper_img: [
      'https://img.xhfkindergarten.cn/1558173806718',
      'https://img.xhfkindergarten.cn/1558599513634',
      'https://img.xhfkindergarten.cn/1558602050535'
    ],
    mallItem: [
      {
        image: 'https://img.xhfkindergarten.cn/default-bird.png',
        mallName: '商城1', 
      },
      {
        image: 'https://img.xhfkindergarten.cn/happy-bird.png',
        mallName: '商城2', 
      },
      {
        image: 'https://img.xhfkindergarten.cn/boxer-bird.png',
        mallName: '商城3', 
      },
      {
        image: 'https://img.xhfkindergarten.cn/default-bird.png',
        mallName: '商城4', 
      },
      {
        image: 'https://img.xhfkindergarten.cn/happy-bird.png',
        mallName: '商城5', 
      },
      {
        image: 'https://img.xhfkindergarten.cn/boxer-bird.png',
        mallName: '商城6', 
      },
      {
        image: 'https://img.xhfkindergarten.cn/default-bird.png',
        mallName: '商城7', 
      },
      {
        image: 'https://img.xhfkindergarten.cn/happy-bird.png',
        mallName: '商城8', 
      },
      {
        image: 'https://img.xhfkindergarten.cn/boxer-bird.png',
        mallName: '商城9', 
      },
      {
        image: 'https://img.xhfkindergarten.cn/boxer-bird.png',
        mallName: '商城9', 
      },
      {
        image: 'https://img.xhfkindergarten.cn/default-bird.png',
        mallName: '商城10', 
      }
    ],
    ad_banner_img: 'https://img.xhfkindergarten.cn/1558604895233',
    leader_info: {
      leader_img: 'https://img.xhfkindergarten.cn/1558922443506',
      leader_phone: '13022003413'
    },
    floorPic: {
      'PICTURE_ADDRESS': 'https://img.xhfkindergarten.cn/1558604895233',
      floor1: [
        {
          image: 'https://img.xhfkindergarten.cn/default-bird.png'
        },
        {
          image: 'https://img.xhfkindergarten.cn/boxer-bird.png'
        },
        {
          image: 'https://img.xhfkindergarten.cn/happy-bird.png'
        },
        {
          image: 'https://img.xhfkindergarten.cn/knight-bird.png'
        },
        {
          image: 'https://img.xhfkindergarten.cn/default-bird.png'
        },
      ]
    },
    recommendList: [
      {
        image: 'https://img.xhfkindergarten.cn/1558922768547',
        mallPrice: '200',
        price: '250'
      },
      {
        image: 'https://img.xhfkindergarten.cn/1558922768547',
        mallPrice: '201',
        price: '251'
      },
      {
        image: 'https://img.xhfkindergarten.cn/1558922768547',
        mallPrice: '202',
        price: '252'
      },
      {
        image: 'https://img.xhfkindergarten.cn/1558922768547',
        mallPrice: '203',
        price: '253'
      }
    ]
  }
})

router.post('/homePageBelowContent', async ctx => {
  ctx.status = 200
  ctx.body = {
    hotGoods: [
      {
        img: 'https://img.xhfkindergarten.cn/default-bird.png',
        name: '火爆商品1',
        price: 16.00,
        mallPrice: 17.60
      },
      {
        img: 'https://img.xhfkindergarten.cn/happy-bird.png',
        name: '火爆商品2',
        price: 16.00,
        mallPrice: 17.60
      },
      {
        img: 'https://img.xhfkindergarten.cn/boxer-bird.png',
        name: '火爆商品3',
        price: 16.00,
        mallPrice: 17.60
      },
      {
        img: 'https://img.xhfkindergarten.cn/knight-bird.png',
        name: '火爆商品4',
        price: 16.00,
        mallPrice: 17.60
      }
    ]
  }
})

router.post('/getCategory', async ctx => {
  ctx.body = {
    category: [
      {
        mallSubId: '2ckvidso33nm4k3l433kls',
        mallCategoryId: 4,
        mallSubName: '北京二锅头',
        comments: null
      },
      {
        mallSubId: '2ckvidso33nm4k3l433kls',
        mallCategoryId: 4,
        mallSubName: '杜康',
        comments: null
      },
      {
        mallSubId: '2ckvidso33nm4k3l433kls',
        mallCategoryId: 4,
        mallSubName: '高粱酒',
        comments: null
      },
      {
        mallSubId: '2ckvidso33nm4k3l433kls',
        mallCategoryId: 4,
        mallSubName: '顿丘',
        comments: null
      }
    ]
  }
})






module.exports = router.routes()