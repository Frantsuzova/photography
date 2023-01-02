const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// учит «Вебпак» работать с html-файлами
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// каждый раз при сборке проекта удаляет содержимое папки dist
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// учит «Вебпак» работать с css-файлами
const webpack = require('webpack');

module.exports = {
  entry: { main: "./src/pages/index.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "",
  },
  devtool: "source-map",
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "./dist"), // путь, куда "смотрит" режим разработчика
    compress: true, // это ускорит загрузку в режиме разработки
    port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт

    open: {
      app: {
        name: "Google Chrome",
      },
    }, // сайт будет открываться сам при запуске npm run dev
  },
  module: {
    /* Наше правило звучит так: «если тебе попадётся файл с расширением .js, сначала отдай этот файл модулю babel-loader,
    а затем добавляй в сборку. Но не применяй это правило к пакетам, скачанным из NPM,
     которые лежат в папке node_modules». */
    rules: [
      // rules — это массив правил
      // добавим в него объект правил для бабеля
      {
        // регулярное выражение, которое ищет все js файлы
        test: /\.js$/,
        // при обработке этих файлов нужно использовать babel-loader
        use: "babel-loader",
        // исключает папку node_modules, файлы в ней обрабатывать не нужно
        exclude: "/node_modules/",
      },
      // добавили правило для обработки файлов
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        // изображения в отдельной директории
        type: "asset/resource",
        generator: {
          filename: "images/[name].[contenthash][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        // шрифты в отдельной директории
        type: "asset/resource",
        generator: {
          filename: "fonts/[name].[contenthash][ext]",
        },
      },
      {
        // применять это правило только к CSS-файлам
        test: /\.css$/,
        // при обработке этих файлов нужно использовать
        // MiniCssExtractPlugin.loader и css-loader
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
            // Эта опция описана в документации сss-loader (https://webpack.js.org/loaders/css-loader/#importloaders).
            // Значение 1 говорит о том, что некоторые трансформации PostCSS нужно применить до css-loader
          },
          "postcss-loader",
        ],
      },
      //jquery
      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: {
            globalName: "$",
            override: true,
          },
        },
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html", // путь к файлу index.html
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(), // подключение плагина для объединения файлов
    new webpack.ProvidePlugin({
      $: "jquery/dist/jquery.min.js",
      jQuery: "jquery/dist/jquery.min.js",
      "window.jQuery": "jquery/dist/jquery.min.js"
    })
  ]

};
