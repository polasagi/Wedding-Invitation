import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { BlogService } from '../blogAdd/blog.service';
import { Blog } from '../blogAdd/blog.prop';


@Component({
  selector: 'app-blog',
  templateUrl: './blog-info.component.html'

})
export class BlogInfoComponent {



  constructor(public blogsvc: BlogService) { }

  blogs = this.blogsvc.getBlog();

}
