import { DatabaseType } from '@/lib/domain/database-type';
import type { Template } from '../templates-data';
import image from '@/assets/templates/screeenly-db.png';
import imageDark from '@/assets/templates/screeenly-db-dark.png';

const now = Date.now();

export const screeenlyDb: Template = {
    slug: 'screeenly-database',
    name: 'Screeenly',
    shortDescription: 'Capturing high-quality website screenshots',
    description:
        'An open-source web application that provides a simple API for generating website screenshots.',
    image,
    imageDark,
    tags: ['Postgres', 'Open Source', 'Laravel', 'PHP'],
    featured: false,
    url: 'https://github.com/stefanzweifel/screeenly',
    diagram: {
        id: 'screeenly_db',
        name: 'screeenly-database',
        createdAt: new Date(),
        updatedAt: new Date(),
        databaseType: DatabaseType.POSTGRESQL,
        tables: [
            {
                id: '8fvrxtp8fkibvean8y4yrrfot',
                name: 'password_resets',
                schema: 'public',
                x: 500,
                y: 500,
                fields: [
                    {
                        id: 'qfl022lduv48ud0fwo6r4cq4w',
                        name: 'email',
                        type: {
                            id: 'character_varying',
                            name: 'character varying',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'ik6kosdk4rqdmos2rcixmb9zb',
                        name: 'token',
                        type: {
                            id: 'character_varying',
                            name: 'character varying',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'uuecnzt95psc38ogftbic40kq',
                        name: 'created_at',
                        type: {
                            id: 'timestamp_without_time_zone',
                            name: 'timestamp without time zone',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                ],
                indexes: [
                    {
                        id: 'mwdx35yl99udnttmwyam1x2dl',
                        name: 'password_resets_email_index',
                        unique: false,
                        fieldIds: ['qfl022lduv48ud0fwo6r4cq4w'],
                        createdAt: now,
                    },
                    {
                        id: 'rhw4qs22pd3xiiyspzfe60nr0',
                        name: 'password_resets_token_index',
                        unique: false,
                        fieldIds: ['ik6kosdk4rqdmos2rcixmb9zb'],
                        createdAt: now,
                    },
                ],
                color: '#ff6363',
                isView: false,
                isMaterializedView: false,
                createdAt: now,
            },
            {
                id: 'b5ry73fbil6z7ijb00kd9a49d',
                name: 'api_keys',
                schema: 'public',
                x: 500,
                y: 197.97315993202608,
                fields: [
                    {
                        id: '42oq2j16gxgwupuktzgk60bju',
                        name: 'id',
                        type: {
                            id: 'integer',
                            name: 'integer',
                        },
                        primaryKey: true,
                        unique: true,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'hp74f9yh75felios6qtwrmand',
                        name: 'name',
                        type: {
                            id: 'character_varying',
                            name: 'character varying',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: '9ek6hdltem6s742jzwy9lhjcw',
                        name: 'key',
                        type: {
                            id: 'character_varying',
                            name: 'character varying',
                        },
                        primaryKey: false,
                        unique: true,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'upy2tuvw9egm4n9jwx4u8vpt4',
                        name: 'user_id',
                        type: {
                            id: 'integer',
                            name: 'integer',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: '63fkdp9s6xgen1oer643g1qwq',
                        name: 'created_at',
                        type: {
                            id: 'timestamp_without_time_zone',
                            name: 'timestamp without time zone',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                    {
                        id: 'u3rkz6nq9ckxlbxsbizyh5fkh',
                        name: 'updated_at',
                        type: {
                            id: 'timestamp_without_time_zone',
                            name: 'timestamp without time zone',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                ],
                indexes: [
                    {
                        id: 'v0ash4efnei4edc1xcllkabf2',
                        name: 'api_keys_key_unique',
                        unique: true,
                        fieldIds: ['9ek6hdltem6s742jzwy9lhjcw'],
                        createdAt: now,
                    },
                    {
                        id: 'cavfokep5f3eb7lpj6408da57',
                        name: 'api_keys_pkey',
                        unique: true,
                        fieldIds: ['42oq2j16gxgwupuktzgk60bju'],
                        createdAt: now,
                    },
                    {
                        id: 'mcjywmwjipakf5zsw2mclqpol',
                        name: 'api_keys_user_id_index',
                        unique: false,
                        fieldIds: ['upy2tuvw9egm4n9jwx4u8vpt4'],
                        createdAt: now,
                    },
                ],
                color: '#b067e9',
                isView: false,
                isMaterializedView: false,
                createdAt: now,
            },
            {
                id: 'eq3rinbmyqkvn4pp3ai7crdiq',
                name: 'users',
                schema: 'public',
                x: 119.59463198640526,
                y: 5.473021582326737,
                fields: [
                    {
                        id: 'c9v3h1y3dwkhithk1j0vzr0u6',
                        name: 'id',
                        type: {
                            id: 'integer',
                            name: 'integer',
                        },
                        primaryKey: true,
                        unique: true,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'jpawkhjll1flccir6ihv0pm6y',
                        name: 'email',
                        type: {
                            id: 'character_varying',
                            name: 'character varying',
                        },
                        primaryKey: false,
                        unique: true,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'ci1ytk3qjdnh590eokr8owlv6',
                        name: 'token',
                        type: {
                            id: 'character_varying',
                            name: 'character varying',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                    {
                        id: 'iz7bu0ywvw2315vkb4zkxw41v',
                        name: 'provider',
                        type: {
                            id: 'character_varying',
                            name: 'character varying',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                    {
                        id: 'a2tw1rk4m5w1lomb0riil560c',
                        name: 'provider_id',
                        type: {
                            id: 'character_varying',
                            name: 'character varying',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                    {
                        id: '88nfh4wbfkpe4nrcumsygpub0',
                        name: 'created_at',
                        type: {
                            id: 'timestamp_without_time_zone',
                            name: 'timestamp without time zone',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                    {
                        id: 'k01wh0624jb25z17dcl2q1ejl',
                        name: 'updated_at',
                        type: {
                            id: 'timestamp_without_time_zone',
                            name: 'timestamp without time zone',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                    {
                        id: '5g5bkwo0480o9sps9j0l6z2l4',
                        name: 'name',
                        type: {
                            id: 'character_varying',
                            name: 'character varying',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                    {
                        id: 'h2b28wbenke9xw4neelrr2ux7',
                        name: 'password',
                        type: {
                            id: 'character_varying',
                            name: 'character varying',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                    {
                        id: '745vls6ns8u1h5vm0a9g0qg4z',
                        name: 'remember_token',
                        type: {
                            id: 'character_varying',
                            name: 'character varying',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                ],
                indexes: [
                    {
                        id: '5a2nbtxdq5rp8wdwuqrjmqr4d',
                        name: 'users_pkey',
                        unique: true,
                        fieldIds: ['c9v3h1y3dwkhithk1j0vzr0u6'],
                        createdAt: now,
                    },
                    {
                        id: '2h880rrh20ji529gln769go96',
                        name: 'users_email_unique',
                        unique: true,
                        fieldIds: ['jpawkhjll1flccir6ihv0pm6y'],
                        createdAt: now,
                    },
                ],
                color: '#c05dcf',
                isView: false,
                isMaterializedView: false,
                createdAt: now,
            },
            {
                id: 'kvrc9elo1eruj57f8wbx4f2bu',
                name: 'api_log',
                schema: 'public',
                x: -228.58121195241824,
                y: 217.63516878776466,
                fields: [
                    {
                        id: 'hkznvnetpfhfk4x6wvvscj451',
                        name: 'id',
                        type: {
                            id: 'integer',
                            name: 'integer',
                        },
                        primaryKey: true,
                        unique: true,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'gy3tdo2xnei2glvf684uvpx95',
                        name: 'user_id',
                        type: {
                            id: 'integer',
                            name: 'integer',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                    {
                        id: 'gvl7q0o671v4inhnotbbwdsn1',
                        name: 'api_key_id',
                        type: {
                            id: 'integer',
                            name: 'integer',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                    {
                        id: '9504kb5mta5gdvneyvbyb2f86',
                        name: 'images',
                        type: {
                            id: 'text',
                            name: 'text',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: '80y0556noakmgidg3c1m0ly3h',
                        name: 'created_at',
                        type: {
                            id: 'timestamp_without_time_zone',
                            name: 'timestamp without time zone',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                    {
                        id: '7q7s2ni6wvgci5v6e2krbvynv',
                        name: 'updated_at',
                        type: {
                            id: 'timestamp_without_time_zone',
                            name: 'timestamp without time zone',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                ],
                indexes: [
                    {
                        id: '28m6v8j3gxiwglm7hvn175h8a',
                        name: 'api_log_user_id_index',
                        unique: false,
                        fieldIds: ['gy3tdo2xnei2glvf684uvpx95'],
                        createdAt: now,
                    },
                    {
                        id: '7a9amdkmreqnw06iytcahi85o',
                        name: 'api_log_pkey',
                        unique: true,
                        fieldIds: ['hkznvnetpfhfk4x6wvvscj451'],
                        createdAt: now,
                    },
                ],
                color: '#ffe374',
                isView: false,
                isMaterializedView: false,
                createdAt: now,
            },
            {
                id: 'lj0wibk34sqr1zz9e0kuuvqji',
                name: 'migrations',
                schema: 'public',
                x: 216.48644161631364,
                y: 505.8783895959216,
                fields: [
                    {
                        id: 'ynxooqs5lm3oonb59stpgrzlj',
                        name: 'id',
                        type: {
                            id: 'integer',
                            name: 'integer',
                        },
                        primaryKey: true,
                        unique: true,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'lesnsizfcigcf2l73ksg93v0s',
                        name: 'migration',
                        type: {
                            id: 'character_varying',
                            name: 'character varying',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'rq31fdh4r9c0ko0e35f2b261u',
                        name: 'batch',
                        type: {
                            id: 'integer',
                            name: 'integer',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                ],
                indexes: [
                    {
                        id: '0hjk4ujpmk2fnuz570duu8pay',
                        name: 'migrations_pkey',
                        unique: true,
                        fieldIds: ['ynxooqs5lm3oonb59stpgrzlj'],
                        createdAt: now,
                    },
                ],
                color: '#7175fa',
                isView: false,
                isMaterializedView: false,
                createdAt: now,
            },
        ],
        relationships: [
            {
                id: '2hd93u6rohoxdbc9lwdibp104',
                name: 'api_keys_user_id_foreign',
                sourceSchema: 'public',
                targetSchema: 'public',
                sourceTableId: 'b5ry73fbil6z7ijb00kd9a49d',
                targetTableId: 'eq3rinbmyqkvn4pp3ai7crdiq',
                sourceFieldId: 'upy2tuvw9egm4n9jwx4u8vpt4',
                targetFieldId: 'c9v3h1y3dwkhithk1j0vzr0u6',
                sourceCardinality: 'many',
                targetCardinality: 'one',
                createdAt: now,
            },
            {
                id: 'nqopnr1bc8dlavpfr735mzjsr',
                name: 'api_log_user_id_foreign',
                sourceSchema: 'public',
                targetSchema: 'public',
                sourceTableId: 'kvrc9elo1eruj57f8wbx4f2bu',
                targetTableId: 'eq3rinbmyqkvn4pp3ai7crdiq',
                sourceFieldId: 'gy3tdo2xnei2glvf684uvpx95',
                targetFieldId: 'c9v3h1y3dwkhithk1j0vzr0u6',
                sourceCardinality: 'many',
                targetCardinality: 'one',
                createdAt: now,
            },
        ],
        dependencies: [],
    },
};
