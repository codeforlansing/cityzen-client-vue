[![build](https://github.com/codeforlansing/cityzen-client-vue/workflows/build/badge.svg)](https://github.com/codeforlansing/cityzen-client-vue/actions?query=workflow%3Abuild)
[![version](https://img.shields.io/npm/v/@codeforlansing/cityzen-client-vue.svg?sanitize=true)](https://www.npmjs.com/package/@codeforlansing/cityzen-client-vue)
[![license](https://img.shields.io/npm/l/@codeforlansing/cityzen-client-vue.svg?sanitize=true)](https://github.com/codeforlansing/cityzen-client-vue/blob/master/LICENSE)

# CityZen Vue Client

This project is the frontend component for the Cityzen volunteer sign-up project. We've built CityZen for The Fledge. The Fledge describes itself as "a one-of-a-kind radically inclusive Ideation Space, Maker Space, Incubator and Accelerator on a mission to create opportunities to pursue happiness." They work with two types of volunteers, people who are active in one of their projects and parolees fulfilling a community service commitment mandated by the court.

CityZen allows people to volunteer for both a project and tasks on the group's website. The Fledge staff setup a project in Trello and list the tasks required. They can drag or drop the project cards in the order they want them to appear on their website.

Volunteers then click on a project task(s) and enter their email. The group receives an email and schedules an appointment for the volunteer. If it's a new volunteer and the group is using either HubSpot or MailChimp their contact information will be added.

CityZen consists of three parts: [the Server](https://www.npmjs.com/package/@codeforlansing/cityzen-server), the Client and a [Trello](https://trello.com/) account. The Trello account is used to create volunteer projects and their tasks. If you don’t want to install the client there is a CDN driven page you can put on your website and then just simply link to it.

## Installing the client

First you want to setup the CityZen Server and also create a Trello account. For help linking the Trello account to the server visit the [CityZen docs](https://codeforlansing.github.io/cityzen-docs/Link-Trello.html). It will walk you through getting the required information from Trello and create an env file for the CityZen server.

Once you have the server running and linked to Trello you can install the client on your web server. The client will install to port 8080\. There are two ways to install the client:

First way is to simply download the client and associated files. Two files are required: <a href="https://raw.githubusercontent.com/codeforlansing/cityzen-docs/master/client-sample/client.html" target="_blank">client.html</a> and <a href="https://raw.githubusercontent.com/codeforlansing/cityzen-docs/master/client-sample/sample-volunteer-tasks.css" target="_blank">sample-volunteer-tasks.css</a>.

Second way is to build the web page yourself and be sure to link to three CDN files in your pages head statement:

* [https://cdn.jsdelivr.net/npm/@codeforlansing/cityzen-client-vue@latest/dist/js/volunteer-tasks.js](https://cdn.jsdelivr.net/npm/@codeforlansing/cityzen-client-vue@latest/dist/js/volunteer-tasks.js)

* [https://cdn.jsdelivr.net/npm/@codeforlansing/cityzen-client-vue@latest/dist/js/volunteer-tasks.js.map](https://cdn.jsdelivr.net/npm/@codeforlansing/cityzen-client-vue@latest/dist/js/volunteer-tasks.js.map)

* [https://cdn.jsdelivr.net/npm/@codeforlansing/cityzen-client-vue@latest/dist/css/volunteer-tasks.css](https://cdn.jsdelivr.net/npm/@codeforlansing/cityzen-client-vue@latest/dist/css/volunteer-tasks.css)

## Questions

For general support, direct your questions to the code4lansing channel in the [Lansing Codes Slack team](https://lansingcodes-slackin.herokuapp.com/). The issue list for this project is exclusively for bug reports and feature requests.

## Stay in Touch

* [Slack](https://lansingcodes-slackin.herokuapp.com/) (join the code4lansing channel)
* [Facebook](https://www.facebook.com/code4lansing)
* [Website](https://codeforlansing.org/)

## Contribution

You are welcome and encouraged to make changes to this website by submitting pull requests or forking our code to make your own community website! Before you get ahead of yourself though, please read our [Contributing Guide](https://github.com/codeforlansing/cityzen-client-vue/blob/master/.github/CONTRIBUTING.md).

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2019-present, Code for Lansing

## Keywords

Volunteer, Code For America
