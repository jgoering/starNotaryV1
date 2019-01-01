const StarNotary = artifacts.require('./starNotary.sol');

contract('StarNotary', async (accs) => {

    it ('has correct name', async () => {
        let instance = await StarNotary.deployed();
        assert.equal(await instance.starName.call(), 'Awesome Udacity Star');
    });

    it('can be claimed', async () => {
        let instance = await StarNotary.deployed();
        await instance.claimStar({from: accs[0]});
        assert.equal(await instance.starOwner.call(), accs[0])
    });

    it('can change owners', async () => {
        let instance = await StarNotary.deployed();
        let owner = accs[0];
        var secondUser = accs[1];
        await instance.claimStar({from: owner})
        assert.equal(await instance.starOwner.call(), owner)
        await instance.claimStar({from: secondUser})
        assert.equal(await instance.starOwner.call(), secondUser)
    })
});



