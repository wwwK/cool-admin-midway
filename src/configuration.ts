import { App, Configuration } from '@midwayjs/decorator';
import { ILifeCycle, IMidwayContainer } from '@midwayjs/core';
import { Application } from 'egg';
import * as orm from '@midwayjs/orm';
import * as cool from 'midwayjs-cool-core';

@Configuration({
  // 注意组件顺序 cool 有依赖orm组件， 所以必须放在，orm组件之后 cool的其他组件必须放在cool 核心组件之后
  imports: [
    // 必须，不可移除， https://typeorm.io  打不开？ https://typeorm.biunav.com/zh/
    orm,
    // 必须，不可移除， cool-admin 官方组件 https://www.cool-js.com
    cool
  ]
})
export class ContainerLifeCycle implements ILifeCycle {

  @App()
  app: Application;
  // 应用启动完成
  async onReady(container?: IMidwayContainer) {
    console.log(container.baseDir)

  }
  // 应用停止
  async onStop() {

  }
}
