//  Problem - 6 : Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.
{
  interface Profile {
    name: string
    age: number
    email: string
  }
  function updateProfile(profile: Profile, changes: Partial<Profile>): Profile {
    return { ...profile, ...changes }
  }

  const myProfile = { name: 'Alice', age: 25, email: 'alice@example.com' }
  console.log(updateProfile(myProfile, { age: 30 }))
  // { name: 'Alice', age: 30, email: 'alice@example.com' }
}