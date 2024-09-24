
# Uçuş Rezervasyon Web Uygulaması

Bu proje, React ile geliştirilmiş bir ön yüz ve Node.js ile MongoDB kullanan bir arka yüz içeren bir web uygulamasıdır. Uygulama, Schiphol Havalimanı'nın API'si ile uçuş bilgilerini listeler, kullanıcıların uçuş rezervasyonu yapmasına olanak tanır ve rezervasyonları bir veritabanına kaydeder.


# Proje Kurulumu

Uygulamayı kendi localinizde çalıştırabilmek için öncelikle projeyi localinize klonlayın.

` git clone https://github.com/kuloglusalih10/App-Fellas-Test-Case.git`

Ardından proje kök ve ` /backend ` dizinlerinde bulunan .env.example dosyalarını kendi ortam değişkenlerinize göre düzenleyip isimlerini ` .env ` olarak değiştirin.

```js

{

  // Kök dizin için (React)
  
  VITE_SCHIPHOL_APP_ID="YOUR_SCHİPHOL_APP_ID"
  VITE_SCHIPHOL_APP_KEY="YOUR_SCHİPHOL_APP_KEY"

  // ./backend dizini için (node js)

  SCHIPHOL_APP_ID="YOUR_SCHİPHOL_APP_ID"
  SCHIPHOL_APP_KEY="YOUR_SCHİPHOL_APP_KEY"
  MONGO_URL='YOUR_MONGODB_CONNECTİON_STRİNG'

}

```

Daha sonra gerekli paket kurulumlarını kök ve ``` /backend``` dizininde ```npm install``` komutu ile yapın.

Son olarak kök ve ``` /backend``` dizininde ```npm run dev``` komutunu çalıştırın, artık kullanıma hazırsınız 🎉



## Kullanılan teknolojiler

**React:** Frontend framework.

**Tailwind:** CSS kütüphanesi.

**Redux Toolkit:** Durum yönetimi kütüphanesi.

**Schiphol Flight Api:** Schiphol Havalimanı apisi.

**Node js / express:** JavaScript çalışma ortamı.

**MongoDB:** NoSQL veritabanı.

**HeadlessUI:** Ön yüz kütüphanesi.


## Yardımcı Araçlar

**Date-fns:** Tarih formatları

**react-lottie:** Animasyonlu görseller

**react-toastify:** kullanıcı bildirimleri

**mongoose:** MongoDB veritabanı yönetimi

**swagger-ui-express:** Api dökümanı

**joi:** Veri validasyonu


## Özellikler

**Anasayfa:** 
* Schiphol Uçuş API’si kullanılarak uçuş bilgileri listelenir.
* Kalkış ve iniş konumuna göre uçuşlar listelenebilir.
* Seçilen iki tarih arasındaki uçuşlar listelenebilir ( en fazla 3 gün aralığı seçilebilir)
* Hatalı aramalarda kullanıcıya bildirim mesajı gösterilir.
* Uçuşa ait gösterilen bilgiler :
    - Uçak kalkış ve tahmini iniş saati ( ⚠️ Apiden kaynaklı bazı uçuşların kalkış ve iniş saatleri aynı gözükmektedir. )
    - Uçak kalkış ve iniş konumu ( şehir ve havalimanı olarak )
    - Uçuş süresi ( ⚠️ Apiden kaynaklı bazı uçuş süreleri - veya 0 olarak gözükmektedir)
    - Havayolu logosu
    - Ücret ( uçuş süresine göre hesaplanmıştır, süresi - ve 0 olan uçuşlar için 0$ olarak fiyat belirlenmiştir)

* Uçuşlar fiyatına ve yeniliğine göre sıralanabilir.
* Uçuşlar varış süresine göre filtrelenebilir.
* Uçuşlar aktarma sayısına ( stops ) göre filtrelenebilir.
* Uçuşlar havayolu şirketine göre filtrelenebilir.
* Rezervasyon yapılabilir ve rezervasyonlar MongoDB veritabanına kaydedilir.
* Geçmiş tarihli rezervasyonlar ve zaten kayıtlı olan uçuşların rezerve edilmesi engellenir ve kullanıcıya bildirim olarak gösterilir.

<img width="1710" alt="Ekran Resmi 2024-09-24 17 42 47" src="https://github.com/user-attachments/assets/421b855e-9ea8-4ed6-9da3-b9180d7449a5">


**Uçuşlarım**

* MongoDB üzerine kayıtlı rezervasyonlar listelenebilir.
* Kayıtlar önerilen (Alfabetik), tarih ve fiyatına göre sıralanabilir.
* Uçuşa ait gösterilen bilgiler.
    - Havayolu logosu
    - Uçak kalkış ve tahmini iniş saati ( ⚠️ Apiden kaynaklı bazı uçuşların kalkış ve iniş saatleri aynı gözükmektedir. )
    - Uçak kalkış ve iniş konumu ( şehir ve havalimanı olarak )
    - Uçuş süresi ( ⚠️ Apiden kaynaklı bazı uçuş süreleri - veya 0 olarak gözükmektedir)
    - Havayolu logosu
    - Ücret ( uçuş süresine göre hesaplanmıştır, süresi - ve 0 olan uçuşlar için 0$ olarak fiyat belirlenmiştir)

<img width="1710" alt="Ekran Resmi 2024-09-24 17 43 39" src="https://github.com/user-attachments/assets/28c79766-f407-43c0-929a-7e423f6b41d9">


**Backend**

* Joi ile parametre validasyonu.
* SwaggerUI ile api dökümantasyonu.
* Mongoose ile vertabanı yönetimi
* Endpointler : 
  - `/api/flights` -> Tüm uçuşlar
  - `/api/books` -> Tüm rezervasyonlar
  - `/api/books/add-book` -> Yeni rezervasyon ekleme
  - `/api/books/delete-book` -> Rezervasyon silme
  - `/api/books/get-book` -> Bir rezervasyonu görüntüleme

<img width="1710" alt="Ekran Resmi 2024-09-24 17 47 28" src="https://github.com/user-attachments/assets/310ddc95-b05f-4bdb-b531-55993be2a19f">
