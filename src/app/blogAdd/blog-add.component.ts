import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogService } from './blog.service';
import { Subscription } from 'rxjs';
import { Blog } from './blog.prop';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent implements OnInit {
  blogs: Blog[] = [];
  private blogSub: Subscription;

  constructor(public blogService: BlogService) { }


  ngOnInit() {
    this.blogService.getBlog();
    this.blogSub = this.blogService.getBlogListener()
      .subscribe((blogs: Blog[]) => {
        this.blogs = blogs;
      });

  }





  onAddBlog(form: NgForm) {

    if (form.invalid) {
      return;
    }
    this.blogService.addBlog(form.value.MovieName, form.value.content);
    form.resetForm();
  }



}
