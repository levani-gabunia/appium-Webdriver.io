import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import TestData from '../testData/login.json'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.login(TestData.validuser, TestData.validuser)
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            TestData.textLogin)
        await expect(SecurePage.flashAlert).toMatchElementSnapshot('flashAlert')
        //logout
        await LoginPage.logOut()
    })
})

