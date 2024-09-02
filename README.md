# JSDelivr + Github + PicGo 图床

- CDN
  - JSDelivr: <https://www.jsdelivr.com/>
- 仓库:
  - Github
- 图床:
  - PicGo: <https://github.com/Molunerfinn/PicGo/releases>

------

## CDN

- 使用CDN加速来优化网站打开速度，jsDelivr + Github便是免费且好用的CDN。
- Dependencies: <https://www.jsdelivr.com/>
- Github使用CDN加速(默认是main分支):
  - `https://cdn.jsdelivr.net/gh/github_username/your_repository@main`

------

## PicGo 图床

- 使用[PicGo图床](https://picgo.github.io/PicGo-Doc/)，能缓解站点的压力的，并生永久链接。
<br>

- 使用说明：
  - **推荐使用VS-PicGo插件**
    - 安装好插件后，按图下配置好：
    ![VS-PicGo配置](https://cdn.jsdelivr.net/gh/shuguang2000/cdn/images/VS-PicGo配置.png)
    - 上传前选中写好的图片名称，就可使用快捷键`Ctrl + Alt + U`上传剪切板的图片并更改图片文件名。
    - 也可以使用快捷键`Ctrl + Alt + U`上传Explorer中的图片。
  - Windows本地使用PigGo
    - 下载好软件后，按图下配置好并切换为Github图床：
    ![windows本地配置Picgo](https://cdn.jsdelivr.net/gh/shuguang2000/cdn/images/20240902235032.png)
<br>

- 不同版本说明:
  - [windows](https://github.com/Molunerfinn/PicGo/releases)
  - [vscode](https://github.com/PicGo/vs-picgo)
  - [android](https://github.com/PicGo/flutter-picgo)
<br>
  
- 关于国内使用Github图床站点dns被污染
  - 使用[ipadress](https://www.ipaddress.com/)查询`raw.githubusercontent.com`
  - 编辑Windows下的Hosts文件添加域名对应ip即可解决无法访问图片的问题。

------
