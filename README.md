# MTHT- MICROSOFT HACK TOGETHER FOR MS TEAMS

[![GitHub Issues][badge_issues]][link_issues]
[![GitHub Stars][badge_repo_stars]][link_repo]
[![Repo License][badge_license]][link_repo]

## Project Details

For now very simple application which are showing logged-in user details in the card.

### Branching strategy

There is standard git flow implemented with `RELEASE` (will be created for first release), `MASTER`, `DEVELOPEMENT` and `FEATURE` branches. 

### Future plans

My plan after this hack is to build proper application with Azure Cognitive Services on top of it, to quicky communicate with coworkers. 

### Flow

There is only one tab in teams with landing page and sub-tab inside application. Here is the screen dump: 
<p align="center" width="100%">
    <img width="100%" src="https://github.com/KamilSiebyla/MTHT/blob/main/images/Hack_Main_Photo.png?raw=true"> 
</p>

## Prerequisites

- [Node.js](https://nodejs.org/), supported versions: 16, 18
- An M365 account. If you do not have M365 account, apply one from [M365 developer program](https://developer.microsoft.com/microsoft-365/dev-program)
- [Set up your dev environment for extending Teams apps across Microsoft 365](https://aka.ms/teamsfx-m365-apps-prerequisites)
> Please note that after you enrolled your developer tenant in Office 365 Target Release, it may take couple days for the enrollment to take effect.
- [Teams Toolkit Visual Studio Code Extension](https://aka.ms/teams-toolkit) version 5.0.0 and higher or [TeamsFx CLI](https://aka.ms/teamsfx-cli)

## Getting Started

Follow below instructions to get started with this application template for local debugging.

### Test your application with Visual Studio Code

1. Press `F5` or use the `Run and Debug Activity Panel` in Visual Studio Code.
1. Select a target Microsoft 365 application where the personal tabs can run: `Debug in Teams`, `Debug in Outlook` or `Debug in the Microsoft 365 app` and click the `Run and Debug` green arrow button.

### Test your application with TeamsFx CLI

1. Executing the command `teamsfx provision --env local` in your project directory.
1. Executing the command `teamsfx deploy --env local` in your project directory.
1. Executing the command `teamsfx preview --env local --m365-host <m365-host>` in your project directory, where options for `m365-host` are `teams`, `outlook` or `office`.

## References

* [Extend a Teams personal tabs across Microsoft 365](https://docs.microsoft.com/microsoftteams/platform/m365-apps/extend-m365-teams-personal-tab?tabs=manifest-teams-toolkit)
* [Teams Toolkit Documentations](https://docs.microsoft.com/microsoftteams/platform/toolkit/teams-toolkit-fundamentals)
* [Teams Toolkit CLI](https://docs.microsoft.com/microsoftteams/platform/toolkit/teamsfx-cli)
* [TeamsFx SDK](https://docs.microsoft.com/microsoftteams/platform/toolkit/teamsfx-sdk)
* [Teams Toolkit Samples](https://github.com/OfficeDev/TeamsFx-Samples)

## Author
👤 Kamil Siebyła

[![LinkedIn][badge_linkedin]][link_linkedin]

[link_linkedin]: https://www.linkedin.com/in/kamilsiebyla
[badge_linkedin]: https://img.shields.io/badge/LinkedIn-KamilSiebyła-blue?style=for-the-badge&logo=linkedin
[badge_language]: https://img.shields.io/badge/language-C%23-blue?style=for-the-badge
[badge_license]: https://img.shields.io/github/license/KamilSiebyla/MTHT?style=for-the-badge
[badge_issues]: https://img.shields.io/github/issues/KamilSiebyla/MTHT?style=for-the-badge
[badge_repo_stars]: https://img.shields.io/github/stars/KamilSiebyla/MTHT?logo=github&style=for-the-badge
[link_issues]: https://github.com/KamilSiebyla/MTHT/issues
[link_repo]: https://github.com/KamilSiebyla/MTHT
[link_actions]: https://github.com/KamilSiebyla/MTHT
