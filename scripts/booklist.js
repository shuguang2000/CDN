hexo.extend.helper.register('my_list_categories', function(categories){
    
    if (!categories || !categories.length) return '';
  
    const prepareQuery = parent => {
      const query = {};
  
      if (parent) {
        query.parent = parent;
      } else {
        query.parent = {$exists: false};
      }
  
      return categories.find(query).sort('name', 1).filter(cat => cat.length);
    };
  
    const hierarchicalList = (level, parent) => {
      
      if(level > 1) return '';
      let result = '';
  
      prepareQuery(parent).forEach((cat, i) => {
  
        let child;
        child = hierarchicalList(level + 1, cat._id);
  
        if (child) {
          result += `<h2 class="archive-main-category">${cat.name}</h2>`;
        } else {
          result += `<div class="subtitle-item"><div class="subtitle-info">${cat.name}</div></div>`;
  
          //sort by date
          var posts = {};
          for(var n = 0; n < cat.posts.length; n++)
          {
            var post1 = cat.posts.data[n];
            var date1 = this.date(post1.date, "YYYY-MM-DD hh:mm:ss") + post1.title;
            posts[date1] = post1;
          }
          function objKeySort(obj) {
            var newkey = Object.keys(obj).sort();
            var newObj = {};
            for (var i = 0; i < newkey.length; i++) {
                newObj[newkey[i]] = obj[newkey[i]];
            }
            return newObj;
          }
          posts = objKeySort(posts)
          var posts_keys = Object.keys(posts);
  
          for(var k = 0; k < posts_keys.length; k++)
          {
            var post2 = posts[posts_keys[k]];
            result += `<div class="post-item">`;
            result += `<div class="post-info">${this.date(post2.date, "YYYY-MM-DD")}</div>`;
            result += `<a href="${this.url_for(post2.path)}" class="post-title-link" target="_blank">`;
            result += `${post2.title}</a></div>`;
  
            if(k == (cat.posts.length-1))
            {
              result += `<p> </p>`;
            }
          }
        }
  
        if (child) {
          result += `${child}`;
        }
      });
  
      return result;
    };
  
    return `<ul class="post-archive">${hierarchicalList(0)}</ul>`;
  
  });