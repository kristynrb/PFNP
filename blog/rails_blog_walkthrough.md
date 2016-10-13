
## c9 Rails blog app walkthrough

Created by: Thom Page

https://c9.io/pricing Free account!

Rails stuff - make a blog app that just has blog posts (‘index’ and ‘show’ pages)

Requirements: brief understanding of MVC, brief understanding of a database schema

# part 1 - set up

### Make new Rails workspace (10 mins):
* takes ages to load
* don’t have to create a db, it’s already created an sqlite one
* Can go into sqlite with `rails dbconsole`
* Quit sqlite with `.exit`


### Make a controller for blog posts (9 mins):
* lower case plural!:
* `rails g controller posts`
* creates a `posts_controller` file in the `controllers` folder
* creates a ‘posts’ folder in the `views` folder

### Make a model for the blog posts (9 mins):

* capitalized singular!:
* `rails g model Post`
* creates a `post` file in the `models` folder
* creates a migration file


### Schema

Now that the model is made, we can make a schema and then add data to the database:

##### Migration file (6 mins)

In the migration file that was created when the model was generated:

add in
```
      t.string :title
      t.text :text
```

Will look like this:
```
class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.text :text
      t.timestamps null: false
    end
  end
end
```

##### Run the migration (6 mins):

`rake db:migrate`

output will look like:

```
==================
-- create_table(:posts)
   -> 0.0025s
== 20160908181952 CreatePosts: migrated (0.0029s) =============================
```

### Check the db columns exist (6 mins)

* rails dbconsole
* see the columns with `.schema posts`
* another way: `PRAGMA table_info(‘posts’)
* quit sqlite with `.exit`


### Seed the database (7 mins)

In seeds.rb make three new Posts:

```
Post.create(title: 'First title', text: 'I saw a snail with a gun')
Post.create(title: 'Second title', text: 'Got kicked in the bumble-bee')
Post.create(title: 'Third title', text: 'Luv luv luv official stamps')
```

### Check the entries (9 mins):

* `rails c` (opens up the rails console)
* `Post.all` shows all posts attributed to the Post model
* quit rails console with `exit`


# part 2 - the app

### controller index (5 mins)

Inside posts_controller.rb:

```
    def index
        @posts = Post.all
    end
```
### routes (4 mins)

Inside `config/routes.rb`

```
resources :posts
```


### view for index (12 mins)

In `views/posts`, make an `index.html.erb` file

the erb file will integrate html and ruby

`<% %>` running ruby commands without showing them on the page

`<%= %>` runs ruby commands and shows the output on the page

Show the first post:

`<%= @posts[0].title %>`
`<%= @posts[0].text %>`

To show all posts you have to make a loop in ruby:

```
<% @posts.each do |post| %>
    <h2> <%= post.title %> </h2>
    <p> <%= post.text %> </p>
<% end %>
```

On the page it will look like this:

![](https://i.imgur.com/uWJzrLP.png)

### it works


1.3 hrs (add in another hour for mincing around, errors, explanations perhaps: 2.3 hrs)


<br>


# part 3 - dynamic routes

### 'show' page

We've made an index that shows all the blog entries, let's make a page that only shows a selected blog entry. This is called a `show` page.

### controller (9 mins)

In `posts_controller.rb`

```
    def show
        @post = Post.find(params[:id])
    end
```

### view (9 mins)
In `views/posts` make a `show.html.erb`

In `show.html.erb`:

```
<h2> <%= @post.title %> </h2>
<p> <%= @post.text %> </p>
```


### check it out (9 mins)

On the running page, add the id number to end of the url for posts:


```
https://project_name.c9users.io/posts/1
```

* Try it with `posts/2` and `posts/3`

<br>

27 mins, add another half hour for pitfalls, concepts -- around 1 hr for part 3 maybe
