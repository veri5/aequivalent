import { computed } from 'vue'
import store from '../store'
import { Network } from '@verida/client-ts'
import { VaultAccount } from '@verida/account-web-vault'
import { AutoAccount } from '@verida/account-node'

class Verida {
  private storeNamespace: any = null
  private veridaStore: any = null
  private userStore: any = null
  private account: any = null
  private isAutoAccount: any = null
  private _profile: any = null
  private _context: any = null
  private msgInstance: any = {};

  constructor(namespace: string, isAutoAccount: boolean) {
    this.isAutoAccount = isAutoAccount
    this.storeNamespace = store.state[namespace]
    this.veridaStore = computed(() => this.storeNamespace.verida)
    this.userStore = computed(() => this.storeNamespace.user.profile)
  }

  async initialize(){
    this._context = await this.connectContext()
    this._profile = await this.connectProfile()
  }

  private async connectContext(): Promise<any> {
    if(this.isAutoAccount) {
      this.account =  new AutoAccount(
        {
          defaultDatabaseServer: {
              type: 'VeridaDatabase',
              endpointUri: this.veridaStore.value.veridaTestnetDefaultServer
          },
          defaultMessageServer: {
              type: 'VeridaMessage',
              endpointUri: this.veridaStore.value.veridaTestnetDefaultServer
          }
        }, 
        {
          privateKey: this.userStore.value.mnemonic, // or Verida mnemonic seed phrase
          didServerUrl: this.veridaStore.value.veridaTestnetDidServer,
          environment: this.veridaStore.value.environmentType,
        }
      )
    } else {
      this.account = new VaultAccount({
        request: {
          logoUrl: this.veridaStore.value.logoUrl
        },
      })
    }

    return Network.connect({
      client: {
        environment: this.veridaStore.value.environmentType,
      },
      account: this.account,
      context: {
        name: this.veridaStore.value.contextName,
      },
    })
  }
  
  private async connectProfile(): Promise<any> {
    const client = await this.context.getClient()
    const did = await this.context.account.did()
    const profileConnection = await client.openPublicProfile(did, this.veridaStore.value.contextName, 'basicProfile');
    const { name, avatar, description, country } = await profileConnection.getMany()
    
    return {
      did,
      name,
      // avatar,
      description,
      country
    }
  }

  get context(): any {
    return this._context
  }

  get profile(): any { 
    return this._profile
  }
}

const namespace = 'verifive'
const isAutoAccount = true
const verida = new Verida(namespace, isAutoAccount)
verida.initialize()

export default verida