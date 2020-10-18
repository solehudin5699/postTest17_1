##

## Nama : Solehudin

## Track : Mobile

## Batch : 17 - 1

## TEORI

1. Perbedaan Framework dan Library? Framework adalah kerangka kerja menggunakan
   bahasa pemrograman tertentu yang digunakan untuk mengembangkan aplikasi
   berbasis web maupun mobile, sedangkan library merupakan sekumpulan methode
   (fungsi, dsb) atau modul yang dapat digunakan untuk mempermudah dalam
   pengembangan aplikasi
2. Pada git terdapat Working Directory, Index (Stage), dan HEAD jelaskan
   perbedaannya? Working Directory merupakan tempat file atau folder tempat kita
   bekerja, di mana setiap perubahan yang terjadi pada working directory
   terpantau oleh git., Index(stage) merupakan area penyimpanan setelah dilakuak
   add, dengan adanya stage ini kita bisa mengatur mana saja perubahan yang akan
   kita commit, Head merupakan istilah branch mana yang sedang aktif
3. Untuk mengupdate remote repository agar sesuai dengan local repository
   menggunakan perintah?

   1. git add .
   2. git commit –m “info_commitnya_apa”
   3. git push <remote> <branch_name> (contoh git push origin master)

4. Sebutkan macam - macam http method?

   1. GET
   2. POST
   3. PATCH
   4. PUT
   5. DELETE
   6. dll

5. Untuk melakukan pencarian data pada sql command menggunakan syntax? Contoh:
   Mencari user dengan nama “Arkademy” pada tabel USERS SELECT \* FROM users
   WHERE users.name LIKE ‘Arkademy’
6. Apa perbedaan Authorization dan Authentication? Authorization adalah suatu
   fungsi yang menentukan hak akses untuk mengakses sumber informasi atau
   resource tertentu, sedangkan Authentication adalah proses untuk memverifikasi
   apakah user atau seseorang layak mengakses sumber informasi atau resource
   tertentu
7. Apa yang kalian ketahui mengenai Framework Express? Iya, yakni framework yang
   digunakan untuk memudahkan kita dalam membuat sistem backend yang berjalan di
   node js
8. Apa itu Middleware? Dan apa manfaat menggunakan middleware? Middleware
   merupakan suatu perantara antara sistem (contohnya database) dengan aplikasi,
   di mana pada middleware akan dicek apakah request yang diminta oleh aplikasi
   akan dihentikan atau diteruskan ke proses selanjutnya. Manfaat dari
   penggunaan middleware salah satunya adalah meningkatkan keamanan resource
   dari hal-hal ynag tidaj diinginkan.
9. Apa perbedaan Class Component dan Functional Component? Class Component dapat
   menggunakan props dan state ( statefull component) sedangkan functional
   component hanya bisa menggunakan props dan tidak bisa menggunakan state
   (stateless component), namun dengan menggunakan react hook, functional
   component pun seolah-olah bisa menggunakan state.
10. Apa yang kamu ketahui mengenai Redux? Redux merupakan library yang digunakan
    dalam memanejem state,di mana dengan menggunakan redux kita bisa mengakses
    state pada component manapun
11. Jelaskan apa itu microservice? Dan apa manfaat microservice dibandingkan
    arsitektur lainnya? Microservice merupakan pola arsitektur dalam
    pengembangan aplikasi dimana aplikasi yang dibuat dibagi-bagi lagi dalam
    layanan (service) yang lebih kecil namun tetap saling berhubungan satu sama
    lain, manfaatnya adalah akan memudahkan maintenace, lebih mudah
    dikembangkan, lebih aman, lebih mudah untuk menyisipkan teknologi baru, dan
    setiap developer bisa menggunakan teknologi baru tanpa mengganggu aplikasi
    keseluruhan
12. Sebutkan kegunaan dari Content-Type di RESTful HTTP Request Content-Type
    digunakan untuk mengidentifikasi atau memberi tahu type content apa yang
    seharusnya dikembalikan
13. Apakah yang dimaksud dengan CDN (content delivery network)? Dan apa
    manfaatnya menggunakan CDN? CDN merupakan sekumpulan resource atau server
    yang terletak pada beberapa data center, manfaatnya adalah untuk
    meningkatkan kecepatan loading suatu website, selain itu untuk mengurangi
    memory yang digunakan oleh server website tersebut, misalnya untuk pemakaian
    bootstrap dapat dilakukan dengan menggunakan CDN agar memory pada server
    frontend bisa diminimalisir dan mempercepat pengaksesan website yang
    menggunakan bootstrap tersebut
14. Apakah yang dimaksud dengan error CORS? Biasanya terjadi dimana? Error CORS
    merupakan error yang terjadi ketika resource dengan domain tertentu (yang
    tidak mengizinkan CORS) diakses dari domain lain sehingga menyebabkan
    request ditolak, biasanya terjadi ketika domain tempat front-end mengakses
    resource dari domain lain yang tidak mengizinkan CORS
15. Apa perbedaan cookie, sessionStorage dan localStorage? Cookie merupakan
    sekumpulan data yang yang diterima komputer ketika mengakses situs tertentu,
    di mana dengan cookie kta bisa menyimpan data-personal seperi data login,
    addres, dan lain sebagainya, sessionStorage merupakan jenis penyimpanan
    memory pada browser yang sifatnya hanya sementara sesuai sesi, jika browser
    atau tab browser ditutup maka data-data yang tersimpan pada sessionStorage
    akan hilang, sedangkan localStorage merupakan jenis penyimpanan memory pada
    browser yang data penyimpanannya tetap ada meski browser atau tab browser
    ditutup, data yang tersipman hanya bisa dihapus ketika cache browser
    dihapus.
