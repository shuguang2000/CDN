# JSDelivr + Github + PicGo 图床

- CDN: [JSDelivr](https://www.jsdelivr.com/)
- 仓库: [Github](https://github.com/)
- 图床: [PicGo](https://github.com/Molunerfinn/PicGo/releases)

------

## CDN

- 使用CDN加速来优化网站打开速度，jsDelivr + Github便是免费且好用的CDN。
<br>

  - Dependencies: <https://www.jsdelivr.com/>
  - Github使用CDN加速(默认是main分支):
    - <https://cdn.jsdelivr.net/gh/github_username/your_repository@main>

------

## PicGo 图床

- PicGo 图床
  - 使用图床，能缓解站点的压力的，并生成图片的唯一链接，同时也方便管理图片。
  - [PicGo文档](https://picgo.github.io/PicGo-Doc/)
  <br>

  - 不同版本说明:
    - [windows](https://github.com/Molunerfinn/PicGo/releases)
      ![windows本地配置Picgo](https://cdn.jsdelivr.net/gh/shuguang2000/cdn/images/20240902235032.png)
    - [vscode](https://github.com/PicGo/vs-picgo)
    ![vscode配置PicGo](https://cdn.jsdelivr.net/gh/shuguang2000/cdn/images/vscode配置PicGo.png)
      - 上传前选中写好的图片名称，就可使用快捷键`ctrl+alt+u`上传剪切板的图片并更改图片文件名。
    - [android](https://github.com/PicGo/flutter-picgo)
  <br>
  
- 关于国内使用Github图床站点dns被污染
  - 使用[ipadress](https://www.ipaddress.com/)查询`raw.githubusercontent.com`
  - 编辑Windows下的Hosts文件添加域名对应ip即可解决无法访问图片的问题。

------