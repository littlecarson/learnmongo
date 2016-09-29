##下载和安装编译软件

1.下载预编译的编译软件xxx.tar.gz
2.解压命令：tar -jxvf xxxxx.tar.gz
3.在任何系统里编译和安装SCons
如果你的系统里没有一个预编译的SCons包，你可以使用本地python distutils包很容易地编译和安装SCons。
第一步就是下载scons-2.1.0.tar.gz或scons-2.1.0.zip，地址http://www.scons.org/download.html。
解压下载的文件，会创建一个叫scons-2.1.0的目录，进入这个目录执行如下命令安装SCons：
    
    #cd scons-2.1.0
    #python setup.py install

这将会编译SCons，安装scons脚本到python目录（/usr/local/bin或C:\Python25\Scripts），同时会安装SCons编译引擎到python使用的库目录（/usr/local/lib/scons或C:\Python25\scons）。因为这些都是系统目录，你可能需要root或管理员权限去安装SCons。
 
3.1、编译和安装多个版本的SCons
SCons的setup.py脚本有一些扩展，这些扩展支持安装多个版本的SCons到不同的位置。这让下载和体验不同版本的SCons变得很容易。
安装SCons到指定版本的位置，调用setup.py的时候增加--version-lib选项：
    
    #python setup.py install --version-lib

这将会安装SCons编译引擎到/usr/lib/scons-2.1.0或C:\Python25\scons-2.1.0目录。
 
3.2、安装SCons到其他的位置
你可以安装SCons到其他的位置，而不是默认的位置，指定--prefix=选项：

    # python setup.py install --prefix=/opt/scons

这将会安装scons脚本到/opt/scons/bin，安装编译引擎到/opt/scons/lib/scons。
你可以同时指定--prefix和--version-lib，这个时候setup.py将会安装编译引擎到相对于指定prefix的特定版本的目录，在刚才的例子上加上--version-lib，将会安装编译引擎到/opt/scons/lib/scons-2.1.0。
 
3.3、没有管理员权限的情况下编译和安装SCons
如果你没有权限安装SCons到系统目录，使用--prefix选项安装到你选择的其他的位置。例如，安装SCons到相对于用户$HOME目录的合适的位置，scons脚本安装到$HOME/bin，编译引擎安装到$HOME/lib/scons，使用如下命令：
    
    # python setup.py install --prefix=$HOME