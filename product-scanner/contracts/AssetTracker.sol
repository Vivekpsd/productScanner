// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract AssetTracker {
   
    struct Asset {
        string name;
        string description;
        uint cost;
        uint quantity;
        string manufacturer;
        string customer;
        string addressFrom;
        string addressTo;
        bool initialized;    
        bool arrived;
    }

    uint public assetCount=0;

    address public seller;

    function balance(uint _amount) public pure returns(bool){
        require(_amount<20,"Balance need to be greater than 20");
        return true;
    }


    mapping(uint  => Asset) private assetStore;
    mapping(address => mapping(uint => bool)) private walletStore;

    function createAsset(string memory name, string memory description, uint cost,uint quantity, string memory manufacturer,string memory customer ,string memory addressFrom,string memory addressTo) public {
        
        
        assetStore[assetCount] = Asset(name, description,cost,quantity,manufacturer,customer,addressFrom,addressTo,false,false);
        walletStore[msg.sender][assetCount] = true;
        assetCount++;
        
    }

    function transferAsset(address to, uint i) public{
        require(assetStore[assetCount].initialized == false,"No asset with this UUID exists");

    
        require(walletStore[msg.sender][i]==true,"Sender does not own this asset.");
    
    
        walletStore[msg.sender][i] = false;
        seller = msg.sender;
        walletStore[to][i] = true;

        assetStore[assetCount].initialized == true;
    }

    function getItemByUUID(uint i) public view returns(uint cost,uint quantity){
            require(i<=assetCount,"Asset does not exists");
            return (assetStore[i].cost,assetStore[i].quantity);
    }

    function isOwnerOf(address owner, uint i) public view returns (bool) {
    
        if(walletStore[owner][i]) {
            return true;
        }
        return false;
    }

    function getAllAssets() public view returns(Asset[] memory){
        Asset[]   memory x = new Asset[](assetCount);
        for (uint i = 0; i < assetCount; i++) {
            Asset storage member = assetStore[i];
            x[i] = member;
        }
        return x;
    }

    //consumer end 

    function Arrived(uint i) public { 
        assetStore[i].arrived=true;
    }
}