module.exports = {
  //个人介绍配置项
  introduce: "本人从事Java开发工作3年，主要技术栈为SpringBoot、SpringCloud全家桶，有过大型分布式项目开发经验，熟悉Dubbo、Mybatis、Hibernate、Redis、RabbitMq、Kafka等等常用技术工具。作为项目核心开发，有带领新人经验，热爱技术、乐于分享、抗压能力强，注重团队协作。",
  //技能配置项
  technologies:[
    "熟悉java语言、熟悉常用java框架：SpringBoot、SpringCloud、SpringMVC等",
    "熟悉使用常用互联网技术：Dubbo、Mybatis、Hibernate、Redis、RabbitMq、Kafka等",
    "熟悉Groovy语言，Gralis框架",
    "了解Jvm原理及调优",
    "熟悉使用Oracle和Mysql，分析sql性能并优化",
    "熟悉使用常见前端技术JavaScript及Es6特性规范、React生态框架",
    "掌握Git团队开发工具",
    "熟悉HTTP、TCP、UDP等网络协议",
    "热爱技术、乐于分享、抗压能力强"
  ],
  //技术工具配置项
  tools:[
    "担任校园星火计划班主任，帮助实习生快速融入企业氛围、学习及熟悉企业的技术框架及日常使用技术和规范",
    "负责过神测数据用户行为分析",
    "个人博客：http://www.wanshiwu.online",
  ],
  //工作经历配置项
  experiences: [
    {
      companyName: "随行付支付有限公司",
      position: "高级Java开发工程师",
      dateRanges: "2016.07-至今",
      explain: "负责二维码交易系统的设计和日常需求开发。持续改进系统，系统调优、架构优化，保证系统的稳定性和可拓展性。带领初中级开发完成日常开发任务，保证新人的快速融入和快速成长。配合其他部门项目研发。"
    },
  ],
  //项目经验配置项
  project: [
    {
      projectNum: "项目一",
      projectName: "中台通道系统重构及维护",
      projectType: "Api平台项目",
      projectDesc: "为二维码交易系统提供可以快速接入上游接口的能力：封装不同上游的支付、查询、退款等接口，提供统一单一功能的接口给交易系统。并将预下单支付的交易结果及时的推送给交易系统。这个项目分为三个模块：1.channel模块： 提供给交易接口，根据不同的通道和交易类型拼装参数请求上游接口，所有的请求接口都在此模块，是整个通道模块的“入口”。2.batch模块：主要提供针对各种异常情况的补偿功能，例如上游对我们的通知若出现问题，此模块会对支付中的订单进行主动查询，并且调用回调模块将结果通知给交易。3.notification模块，此模块主要接受上游的异步回调通知和为batch模块提供通知交易的接口。是整个通道系统的“出口。“",
      skillDesc: "框架上使用SpringCloud全家桶，使用eureka进行服务治理，使用cloud config进行统一配置管理。使用Ribbon + Feign实现服务调用的负载均衡。使用Hystrix保证服务高可用。开发语言配合groovy提升开发效率。构建工具使用Gradle。",
      responsibilityDesc: "负责接入银联、网联、微信、支付宝上游接口，将不同上游接口封装成统一接口提供给交易系统。设计并开发补偿机制保证交易的稳定性。",
    },
    {
      projectNum: "项目二",
      projectName: "中台二维码交易项目",
      projectType: "Api平台项目",
      projectDesc: "为我司自有产品和四方平台服务提供支付接口，流程内包含商户校验、风控规则、路由、计费、分账、冻结解冻等业务。",
      skillDesc: "使用SpringBoot作为基础框架，使用Dubbo进行服务治理，对可以异步处理的业务流程例如记账，采用消息队列Rabbit Mq进行解耦，减少其他系统对交易的影响。使用Git进行代码管理和版本控制。",
      responsibilityDesc: "负责开发二维码交易的日常需求，优化历史问题，及时解决生产问题。保证二维码交易稳定。",
    },
    {
      projectNum: "项目三",
      projectName: "中台轻量化二维码交易项目",
      projectType: "Api平台项目",
      projectDesc: "高可用二维码交易系统，将二维码项目和其他业务系统解耦，将影响交易成功率的可能性降到最低，保证二维码交易系统的最高可用性。模块主要分为正交易、正交易查询、正交易回调、和后处理。将非阻断流程的业务放入后处理模块，例如：记账、计费、风控累计等流程都可以等消费者支付成功之后再处理。",
      skillDesc: "基础框架采用SringCloud全家桶。使用eureka进行服务治理，使用cloud config进行统一配置管理。使用Ribbon + Feign实现服务调用的负载均衡。使用Hystrix保证服务高可用。正交模块使用正交易库，后置和反交易模块使用后置库，全量数据存在后置库中，正交易数据由Ogg加kafka保障将数据同步至后置库中。并且每日凌晨会有定时任务去对比数据。",
      responsibilityDesc: "负责交易和通道模块的开发及日常维护。持续改进系统，保证二维码系统的高可用。",
    },
    {
      projectNum: "项目四",
      projectName: "统一门户系统",
      projectType: "OA平台项目",
      projectDesc: "统一门户系统，帮助业务同学实现“一次登陆，全部可用”。极大提高业务同学的办公效率。统一管理各个系统权限，使各部门开发只关注业务开发，不用关心权限管理，减少开发成本。",
      skillDesc: "前后端分离项目，前端采用React生态框架及工具： Babel、webpack、Router、ESLint、Less搭配前端UI AntDesgin进行前端开发。通过Iframe标签将其他管理系统页面嵌入。后端采用SringBoot框架提供符合RestFul API规范的增删改查接口。登陆校验通过时将权限信息存入Redis中，并根据随机数和SignKey生成token存入请求同头中。通过拦截器拦截请求获取请求头中token校验当前用户是否有权限。",
      responsibilityDesc: "负责门户管理主要功能开发如：角色、权限、白名单等功能，推进门户系统成功落地，协助各部门管理系统接入门户。",
    }
  ]
}