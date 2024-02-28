const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = 'hi, egg';

    //  ejs
    // await ctx.render('rosie.html');
    await ctx.render('rosie.html', {
      id: 2021,
      name: 'rosie',
      age: 28,
      // skill: 'front-end',
      skills: [
        'front-end',
        'java',
        'egg',
      ],
    });
  }

  async rosie() {
    const { ctx } = this;
    ctx.body = 'hi, Rosie';
  }

  async getBoys() {
    const { ctx } = this;
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(ctx.body = '<h1>小蓝来了</h1>');
      }, 5000);
    });
  }

  // 自由传参模式
  async getBoy() {
    const { ctx } = this;
    const id = ctx.query.id;
    const res = await ctx.service.rosie.getPerson(id);
    ctx.body = res;
    // ctx.body = ctx.query;
  }

  // 严格传参模式
  async getBoy2() {
    const { ctx } = this;
    const { name, age } = ctx.params;
    ctx.body = `大哥你好，我是${name},${age}岁`;
  }

  // POST请求
  async add() {
    const { ctx } = this;

    ctx.body = {
      status: 200,
      data: ctx.request.body,
    };
  }

}

module.exports = HomeController;
