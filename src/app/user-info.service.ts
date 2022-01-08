import { Injectable } from '@angular/core';

interface IUser {
  avatar: string,
  firstName: string,
  lastName: string,
  address: string,
  phone: string,
  skype: string,
  email: string,
  telegram: string,
  facebook: string,
  linkedin: string,
};

interface ISkill {
  skillHeader: string,
  skillDescription: string,
}

interface IProject {
  projectLogo: string,
  projectDescription: string,
}

class User implements IUser {
  avatar: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  skype: string;
  email: string;
  telegram: string;
  facebook: string;
  linkedin: string;
  constructor(avatar:string, firstName:string, lastName: string, address: string, phone: string, skype: string, email: string,
    telegram: string, facebook: string, linkedin: string) {
    this.avatar = avatar;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.phone = phone;
    this.skype = skype;
    this.email = email;
    this.telegram = telegram;
    this.facebook = facebook;
    this.linkedin = linkedin;
  }
}

class Skill implements ISkill {
  skillHeader: string;
  skillDescription: string;
  constructor(skillHeader: string, skillDescription: string) {
    this.skillHeader = skillHeader;
    this.skillDescription = skillDescription;
  }
}

class Project implements IProject {
  projectLogo: string;
  projectDescription: string;
  constructor(projectLogo: string, projectDescription: string) {
    this.projectLogo = projectLogo;
    this.projectDescription = projectDescription;
  }
}

@Injectable({
  providedIn: 'root'
})

export class UserInfoService {
  user: User = {
    avatar: '../../assets/images/Photo.jpg',
    firstName: 'Yevhenii',
    lastName: 'Dekhteruk',
    address: '33 tcentralna Street, Zarichne, Ukraine',
    phone: '+380961271382',
    skype: 'Yevhenii Dekhteruk (live:9130215276bb18dc)',
    email: 'ddehterukk@gmail.com',
    telegram: '@Yevgeny_Dehteruk',
    facebook: 'https://www.facebook.com/profile.php?id=100002152809321',
    linkedin: 'https://www.linkedin.com/in/%D1%94%D0%B2%D0%B3%D0%B5%D0%BD-%D0%B4%D0%B5%D1%85%D1%82%D0%B5%D1%80%D1%83%D0%BA-44b46322a/'
  };

  skillsArray: Skill[] = [
    {
      skillHeader: 'Communication skills',
      skillDescription: `Communication skills are important for any professional. 
      These include written, verbal and non-verbal communication. One of the most important communication
      skills in the modern world is the ability to communicate competently by email. Almost every profession
      requires email correspondence. The professional must be able to write concise and clear letters, observing
      the appropriate format and tone of correspondence. In addition, important communication skills - to argue
      and defend their position, communication in a conflict situation, the ability to listen and conduct
      interviews / conversations, maintaining short polite conversations, handshakes, etc.`
    },
    {
      skillHeader: 'Ability to speak in public',
      skillDescription: `Almost every job requires certain skills required for public speaking. While not everyone 
      at work has to make lengthy presentations on a regular basis, nearly everyone has to speak at meetings, present
       information to their peers, or communicate with a team.`
    },
    {
      skillHeader: 'Teamwork skill',
      skillDescription: `Any specialist works with a group of people, regardless of whether it is work in one of the 
      company's departments or the purposeful creation of a team project.`
    },
    {
      skillHeader: 'Time management',
      skillDescription: `Time management skills are essential to get things done on time without feeling discomfort 
      or the feeling that the tasks are getting bigger than you. This may seem like a very simple skill, but it is 
      one of the most important. Employers often perceive employees who show up for work on time (or even a little 
        earlier) as more efficient, even if this is not the case at all. Be that as it may, punctuality is a chance 
        to add pluses to your professional reputation.`
    },
    {
      skillHeader: 'Flexibility and adaptability',
      skillDescription: `Most activities require a certain level of flexibility, adaptability, and the ability to change. 
      It is important to be able to look at the problem from different perspectives and adjust your workflow when the 
      situation changes. There are certain traits and skills that demonstrate the ability to be adaptive. For example, 
      the ability to analyze the situation, receptivity, the ability to change your mind, patience, anger management 
      skill and orientation to problem solving.`
    },
    {
      skillHeader: 'Leadership skills',
      skillDescription: `Regardless of your position and role in the company, leadership is also important for any 
      professional. They can manifest themselves in the ability to work calmly in a stressful environment, make 
      decisions, set goals, plan, prioritize, strive for development and growth.`
    },
    {
      skillHeader: 'Personal qualities',
      skillDescription: `Skills related to interpersonal relationships are a complex of soft skills that allow
      you to establish effective work with colleagues, managers, clients, etc. This type of skill is also important
       for networking and career development. These include the ability to plan and manage your career, creative 
       and critical thinking, emotional intelligence, the ability to set and maintain personal and professional 
       boundaries, ethics, honesty, patience, perseverance, perseverance, self-confidence, respect for others, 
       the ability to cope with stress, etc.`
    }
  ];

  projectArray: Project[] = [
    {
      projectLogo: '../../assets/logos/23147_19836872_3613525_9a718743_image.jpg',
      projectDescription: 'This is some description of first project'
    },
    {
      projectLogo: '../../assets/logos/1200px-The_Project_logo.svg.jpg',
      projectDescription: 'Here we have few words about second project'
    },
    {
      projectLogo: '../../assets/logos/MS_Project_Logo.png',
      projectDescription: 'At last, I mean - at this moment, description of my third project'
    }
  ];

  constructor() { }

  projectsCount = this.projectArray.length;

  changeSrc(newSrc): string {
    return this.user.avatar = newSrc;
  };

  showSrc():string {
    return this.user.avatar;
  };

  changeFirstName(newName):string {
    return this.user.firstName = newName;
  };

  showFirstName():string {
    return this.user.firstName;
  };

  changeLastName(newLastName):string {
    return this.user.lastName = newLastName;
  };

  showLastName():string {
    return this.user.lastName;
  };

  changeAddress(newAddress): string {
    return this.user.address = newAddress;
  };

  showAddress():string {
    return this.user.address;
  };

  changePhone(newPhone): string {
    return this.user.phone = newPhone;
  };

  showPhone():string {
    return this.user.phone;
  };

  changeEmail(newEmail): string {
    return this.user.email = newEmail;
  };

  showEmail():string {
    return this.user.email;
  };

  changeTelegram(newTelegram): string {
    return this.user.telegram = newTelegram;
  };

  showTelegram():string {
    return this.user.telegram;
  };

  changeFacebook(newFacebook): string {
    return this.user.facebook = newFacebook;
  };

  showFacebook():string {
    return this.user.facebook;
  };

  changeSkype(newSkype): string {
    return this.user.skype = newSkype;
  };

  showSkype():string {
    return this.user.skype;
  };

  changeLinkedin(newLinkedin): string {
    return this.user.linkedin = newLinkedin;
  };

  showLinkedin():string {
    return this.user.linkedin;
  };

  changeSkills(newArr) {
    this.skillsArray.splice(0, this.skillsArray.length);
    newArr.forEach(element => this.skillsArray.push(element));
    return this.skillsArray;
  };

  deleteSkills() {
    console.log("Deleting skills");
    return this.skillsArray.splice(0, this.skillsArray.length); 
  };

  addSkill(newSkill) {
    return this.skillsArray.push(newSkill);
  };

  changeProject(newArr) {
    this.projectArray.splice(0, this.projectArray.length);
    newArr.forEach(element => this.projectArray.push(element));
    return this.projectArray;
  };

  deleteProjects() {
    return this.projectArray.splice(0, this.projectArray.length); 
  };

  addProject(newSkill) {
    return this.projectArray.push(newSkill);
  };
}