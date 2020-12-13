(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{382:function(s,a,t){"use strict";t.r(a);var n=t(42),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"sqoop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sqoop"}},[s._v("¶")]),s._v(" Sqoop")]),s._v(" "),t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("¶")]),s._v(" 简介")]),s._v(" "),t("p",[s._v("Sqoop 是一款开源的工具，主要用于在 Hadoop(Hive) 与传统的数据库 (mysql、postgresql...) 间进行数据的传递，可以将一个关系型数据库（例如 ： MySQL ,Oracle ,Postgres等）中的数据导进到 Hadoop 的 HDFS 中，也可以将 HDFS 的数据导进到关系型数据库中。")]),s._v(" "),t("p",[s._v("Sqoop 项目开始于 2009 年，最早是作为 Hadoop 的一个第三方模块存在，后来为了让使用者能够快速部署，也为了让开发人员能够更快速的迭代开发，Sqoop 独立成为一个 Apache 项目。\nSqoop2 的最新版本是 1.99.7。请注意，2 与 1 不兼容，且特征不完整，它并不打算用于生产部署。\n最后权衡之后我们选用 sqoop-1.4.7。")]),s._v(" "),t("h2",{attrs:{id:"原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("¶")]),s._v(" 原理")]),s._v(" "),t("p",[s._v("将导入或导出命令翻译成 mapreduce 程序来实现，在翻译出的mapreduce中主要是对inputformat和outputformat进行定制。")]),s._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("¶")]),s._v(" 安装")]),s._v(" "),t("p",[s._v("安装 Sqoop 的前提是已经具备Java和Hadoop的环境。")]),s._v(" "),t("h3",{attrs:{id:"解压和重命名文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解压和重命名文件"}},[s._v("¶")]),s._v(" 解压和重命名文件")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /usr/local/sqoop\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf sqoop-1.4.7.bin__hadoop-2.6.0.tar.gz -C /usr/local/sqoop\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/sqoop\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" sqoop-1.4.7.bin__hadoop-2.6.0  sqoop-1.4.7\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"进入sqoop的配置目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进入sqoop的配置目录"}},[s._v("¶")]),s._v(" 进入sqoop的配置目录")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/sqoop/sqoop-1.4.7/conf/\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将sqoop-env-template.sh复制一份并命名为sqoop-env.sh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" sqoop-env-template.sh sqoop-env.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"编辑-sqoop-env-sh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编辑-sqoop-env-sh"}},[s._v("¶")]),s._v(" 编辑 sqoop-env.sh")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" sqoop-env.sh\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Set path to where bin/hadoop is available")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HADOOP_COMMON_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/hadoop/hadoop-3.2.0\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Set path to where hadoop-*-core.jar is available")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HADOOP_MAPRED_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/hadoop/hadoop-3.2.0\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#set the path to where bin/hbase is available")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HBASE_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/hadoop/hbase_2.2.6\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Set the path to where bin/hive is available")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HIVE_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/hive/hive-2.3.7\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h3",{attrs:{id:"配置环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置环境变量"}},[s._v("¶")]),s._v(" 配置环境变量")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim /etc/profile")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sqoop config")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SQOOP_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/sqoop/sqoop-1.4.7\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SQOOP_HOME")]),s._v("/bin\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 刷新配置文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# source /etc/profile")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"拷贝-jdbc-驱动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拷贝-jdbc-驱动"}},[s._v("¶")]),s._v(" 拷贝 JDBC 驱动")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拷贝mysql-connector-java-8.0.16.tar.gz 到lib目录下")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" mysql-connector-java-8.0.16.tar.gz /usr/local/sqoop/sqoop-1.4.7/lib\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证sqoop")]),s._v("\nbin/sqoop "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[t("img",{attrs:{src:"/images/hadoop/sqoop-bin-help.png",alt:"sqoop help 命令"}})]),s._v(" "),t("h3",{attrs:{id:"测试连接mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试连接mysql"}},[s._v("¶")]),s._v(" 测试连接MySQL")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("bin/sqoop list-databases --connect jdbc:mysql://10.211.55.7:3306/ --username root --password root \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"/images/hadoop/sqoop-connect-mysql.png",alt:"连接 mysql"}})]),s._v(" "),t("h2",{attrs:{id:"sqoop报错"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sqoop报错"}},[s._v("¶")]),s._v(" Sqoop报错")]),s._v(" "),t("h3",{attrs:{id:"sqoop连接数据库报错"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sqoop连接数据库报错"}},[s._v("¶")]),s._v(" Sqoop连接数据库报错")]),s._v(" "),t("p",[s._v("找不到 "),t("code",[s._v("org/apache/commons/lang/StringUtils")])]),s._v(" "),t("p",[s._v("解决方法：")]),s._v(" "),t("p",[s._v("在 apache 上下载 commons-lang-2.6.jar 包并上传到 lib 下即可，下载地址：\n"),t("a",{attrs:{href:"http://mirrors.tuna.tsinghua.edu.cn/apache//commons/lang/binaries/commons-lang-2.6-bin.zip",target:"_blank",rel:"noopener noreferrer"}},[s._v("commons-lang-2.6"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"sqoop的简单使用案例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sqoop的简单使用案例"}},[s._v("¶")]),s._v(" Sqoop的简单使用案例")]),s._v(" "),t("h3",{attrs:{id:"导入数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入数据"}},[s._v("¶")]),s._v(" 导入数据")]),s._v(" "),t("p",[s._v("在Sqoop中，“导入”概念指：从非大数据集群（RDBMS）向大数据集群（HDFS，HIVE，HBASE）中传输数据，叫做：导入，即使用import关键字。")]),s._v(" "),t("h4",{attrs:{id:"rdbms到hdfs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rdbms到hdfs"}},[s._v("¶")]),s._v(" RDBMS到HDFS")]),s._v(" "),t("p",[s._v("(1) 确定Mysql服务开启正常")]),s._v(" "),t("p",[s._v("(2) 在Mysql中新建一张表并插入一些数据")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ mysql -uroot -p\nEnter password:root\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" create database company"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" create table company.staff"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id int"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" primary key not null auto_increment, name varchar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", sex varchar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" insert into company.staff"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name, sex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" values"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Thomas'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Male'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" insert into company.staff"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name, sex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" values"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Catalina'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'FeMale'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[t("img",{attrs:{src:"/images/hadoop/sqoop-select-from-staff.png",alt:"select * from staff"}})]),s._v(" "),t("p",[s._v("(3) 导入数据")]),s._v(" "),t("p",[s._v("全部导入")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ bin/sqoop "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--connect jdbc:mysql://10.211.55.7:3306/company "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--username root "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--password root "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--table staff "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--target-dir /user/company "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--delete-target-dir "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--num-mappers "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--fields-terminated-by "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),s._v('"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("在浏览器打开 http://10.211.55.6:50070/explorer.html#/user/company")]),s._v(" "),t("p",[s._v("可以看到结果part-m-00000")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/hadoop/sqoop-import.png",alt:"sqoop import"}})]),s._v(" "),t("h4",{attrs:{id:"rdbms到hive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rdbms到hive"}},[s._v("¶")]),s._v(" RDBMS到Hive")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ bin/sqoop "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--connect jdbc:mysql://10.211.55.7:3306/company "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--username root "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--password root "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--table staff "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--num-mappers "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--hive-import "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--fields-terminated-by "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--hive-overwrite "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--hive-table staff_hive\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提示：该过程分为两步，第一步将数据导入到HDFS，第二步将导入到HDFS的数据迁移到Hive仓库")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("打开浏览器 http://10.211.55.6:50070/explorer.html#/usr/hive/hive-2.3.7/warehouse/staff_hive")]),s._v(" "),t("p",[s._v("可以看到结果part-m-00000")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/hadoop/sqoop-import-hive.png",alt:"sqoop import hive"}})]),s._v(" "),t("h3",{attrs:{id:"导出数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导出数据"}},[s._v("¶")]),s._v(" 导出数据")]),s._v(" "),t("p",[s._v("在Sqoop中，“导出”概念指：从大数据集群（HDFS，HIVE，HBASE）向非大数据集群（RDBMS）中传输数据，叫做：导出，即使用export关键字。")]),s._v(" "),t("h4",{attrs:{id:"hive-hdfs到rdbms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hive-hdfs到rdbms"}},[s._v("¶")]),s._v(" HIVE/HDFS到RDBMS")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("//先在mysql清空表数据\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from staff"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" truncate table staff"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from staff"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nEmpty "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n\n$ bin/sqoop "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--connect jdbc:mysql://10.211.55.7:3306/company "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--username root "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--password root "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--table staff "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--num-mappers "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--export-dir /usr/hive/hive-2.3.7/warehouse/staff_hive "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--input-fields-terminated-by "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),s._v('"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("运行结束")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/hadoop/sqoop-export.png",alt:"sqoop export"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/hadoop/sqoop-export-mysql.png",alt:"sqoop export"}})]),s._v(" "),t("p",[s._v("完成")])])}),[],!1,null,null,null);a.default=e.exports}}]);