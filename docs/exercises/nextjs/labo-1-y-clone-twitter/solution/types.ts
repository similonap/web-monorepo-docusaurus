export interface Profile {
  username: string;
  name: string;
  bio: string;
  avatarUrl: string;
  bannerUrl: string;
}

export interface Post {
  username: string;
  text: string;
  createdOn: string;
  profile: Profile;
}
