import {RouterModule} from '@angular/router';
import { GithubFollowersService } from './github-followers/github-followers-service';
import { CustomErrorHandler } from './error/CustomErrorHandler';
import { TitlePipe } from './titleformat.pipe';
import { AuthorService } from './author.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import {HttpModule} from '@angular/http'
import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { FavaurateComponent } from './favaurate/favaurate.component';
import { RatingComponent } from './rating/rating.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { AuthorSelectorComponent } from './author-selector/author-selector.component';
import { NameFormatDirective } from './name-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { InstructorCourseFormComponent } from './instructor-course-form/instructor-course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './posts/post.service';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { componentFactoryName } from '@angular/compiler';
import { ArchiveHomeComponent } from './archive-home/archive-home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArchiveComponent } from './archive/archive.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    TitlePipe,
    FavaurateComponent,
    RatingComponent,
    PanelComponent,
    LikeComponent,
    AuthorSelectorComponent,
    NameFormatDirective,
    ContactFormComponent,
    InstructorCourseFormComponent,
    SignupFormComponent,
    NewCourseComponent,
    ChangePasswordComponent,
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponentComponent,
    ArchiveHomeComponent,
    NotFoundComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
    //   {
    //   path :'' ,
    //   component : HomeComponent
    // },
    // {
    //   path :'followers/:username' ,
    //   component : GithubProfileComponent
    // },
    // {
    //   path :'followers' ,
    //   component : GithubFollowersComponent
    // },
    // {
    //   path :'posts' ,
    //   component : PostsComponent
    // },
    // {
    //   path : '**',
    //   component : NotFoundComponentComponent
    // }
    {
      path : '',
      component : ArchiveHomeComponent
    },
    {
      path : 'archive/:year/:month',
      component : ArchiveComponent
    },
    {
      path : '**',
      component : NotFoundComponent
    }
  ])
  ],
    providers: [AuthorService, PostService,GithubFollowersService,
                {provide : ErrorHandler ,  useClass : CustomErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
