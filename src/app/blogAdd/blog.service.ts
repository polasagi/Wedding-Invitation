import { Blog } from './blog.prop';
import { Injectable } from '@angular/core';
import { Subject, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class BlogService {
  private blogs: Blog[] = [];
  private blogUpdated = new Subject<Blog[]>();

  constructor(private http: HttpClient) { }


  getBlog() {
    this.http.
      get<{ mess: string, blogs: Blog[] }>('http://localhost:2/api/blogs')
      .subscribe(blogData => {
        this.blogs = blogData.blogs;
        this.blogUpdated.next([...this.blogs]);

      });
  }

  getBlogListener() {
    return this.blogUpdated.asObservable();
  }

  addBlog(titleParam: string, contentParam: string) {
    const blog: Blog = {id:null, title: titleParam, content: contentParam };
    this.http.post<{mess: string}>('http://localhost:2/api/blogs', blog)
    .subscribe(responseData => {
      console.log(responseData.mess);
      this.blogs.push(blog);
      this.blogUpdated.next([...this.blogs]);
        });


    this.blogs.push(blog);
    this.blogUpdated.next([...this.blogs]);

  }
}
