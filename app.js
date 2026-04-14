const express = require('express');
const path = require('path');
const app = express();

// fix lỗi render

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  res.locals.url = req.path; // Tự động lấy đường dẫn hiện tại gán vào biến url
  next();
});

app.get('/', (req, res) => {
    res.render('index',{url:req.path});
});
// Route cho trang Danh mục
app.get('/category', (req, res) => {
    res.render('category',{url:req.path});
});

// Route cho trang Liên hệ
app.get('/contact', (req, res) => {
    res.render('contact',{url:req.path});
});

// Route cho trang Chi tiết bài viết
app.get('/single', (req, res) => {
    res.render('single',{url:req.path});
});


app.listen(3000, () => {
    console.log('Server chạy tại http://localhost:3000');
    console.log('Trang quản trị http://localhost:3000/admin');
});