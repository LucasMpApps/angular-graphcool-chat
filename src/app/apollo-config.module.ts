import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'

@NgModule({
    imports:[
        HttpClientModule,
        ApolloModule,
        HttpLinkModule
    ]
})

export class ApolloConfigModule {

    constructor (
        private apollo: Apollo,
        private httpLink: HttpLink
    ) 
    {
        const uri = 'https://api.graph.cool/simple/v1/cjpfrmx9h6ov00195pqasu068';
        const http = httpLink.create({ uri });

        apollo.create({
            link: http,
            cache: new InMemoryCache()
        })

    }

}