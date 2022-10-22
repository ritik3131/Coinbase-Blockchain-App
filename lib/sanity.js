import  sanityClient  from "@sanity/client";

export const client = sanityClient({
    projectId: 'hbc4m569',
    dataset: 'production',
    appVersion:'2021-03-25',
    token: 'skSgs6Fy8jACXEsCIcJkXKUsRBlhFHwhBcVQAY5hNa25ufHkr8VkJTfPwfP7QYPZdc0VsBf9DYAHoW6lu4IoZBJNdswkWuBh6XweXMJJeG4mFfdGvoqf1A5iguGlnx4tKrAXYCMhdsRB9xEuGmB8H8GiPO344EQXNFq8lYf9HH1IAQjLPnt8',
    useCdn: false,
})