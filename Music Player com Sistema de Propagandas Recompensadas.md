# Music Player com Sistema de Propagandas Recompensadas

## Descrição

Este é um aplicativo web simples de streaming de música que implementa um sistema inovador de propagandas recompensadas. Os usuários podem ouvir música gratuitamente e, periodicamente, são apresentados a propagandas em vídeo. Ao assistir essas propagandas, os usuários ganham créditos que podem ser utilizados no próprio streaming ou em lojas parceiras.

## Funcionalidades

### Player de Música
- **Reprodução de Áudio**: Suporte a arquivos MP3 com controles nativos
- **Navegação**: Botões para música anterior, play/pause e próxima música
- **Interface Intuitiva**: Design limpo e responsivo com informações da música atual
- **Biblioteca**: Três músicas de exemplo pré-carregadas

### Sistema de Propagandas
- **Ativação Automática**: Propagandas aparecem automaticamente a cada 2 músicas reproduzidas
- **Pausa Inteligente**: A música é pausada automaticamente quando a propaganda aparece
- **Vídeos Promocionais**: Suporte a vídeos MP4 para as propagandas
- **Retomada Automática**: A música volta a tocar após o usuário interagir com a propaganda

### Sistema de Créditos
- **Recompensas**: 10 créditos por propaganda assistida
- **Contador Visual**: Display em tempo real do saldo de créditos
- **Persistência**: Os créditos são mantidos durante a sessão do usuário

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e elementos de mídia
- **CSS3**: Estilização moderna com flexbox e design responsivo
- **JavaScript Vanilla**: Lógica de negócio sem dependências externas
- **APIs Web**: Audio API e Video API para controle de mídia

## Estrutura do Projeto

```
music_player_app/
├── index.html          # Estrutura principal da aplicação
├── style.css           # Estilos e layout responsivo
├── script.js           # Lógica do player e sistema de propagandas
└── README.md           # Documentação do projeto
```

## Como Executar

1. **Servidor Local**: Execute um servidor HTTP na pasta do projeto
   ```bash
   python3 -m http.server 8000
   ```

2. **Acesso**: Abra o navegador e acesse `http://localhost:8000`

3. **Uso**: 
   - Clique em "Play" para iniciar a reprodução
   - Use os botões de navegação para trocar de música
   - Após 2 músicas, uma propaganda aparecerá automaticamente
   - Clique em "Assistir Propaganda" para ganhar créditos

## Arquitetura do Sistema

### Fluxo de Funcionamento

1. **Inicialização**: O aplicativo carrega a primeira música da playlist
2. **Reprodução**: O usuário pode controlar a reprodução normalmente
3. **Contador de Propagandas**: A cada mudança de música, um contador é incrementado
4. **Ativação de Propaganda**: Quando o contador atinge 2, uma propaganda é exibida
5. **Recompensa**: O usuário ganha créditos ao interagir com a propaganda
6. **Reset**: O contador é zerado e o ciclo recomeça

### Configurações Personalizáveis

```javascript
const AD_INTERVAL = 2;           // Propagandas a cada 2 músicas
const AD_CREDITS_REWARD = 10;    // 10 créditos por propaganda
```

## Possíveis Expansões

### Funcionalidades Futuras
- **Persistência de Dados**: Salvar créditos no localStorage ou banco de dados
- **Loja de Créditos**: Interface para trocar créditos por benefícios
- **Mais Músicas**: Integração com APIs de streaming como Spotify
- **Propagandas Dinâmicas**: Sistema de ads programáticos
- **Analytics**: Métricas de engajamento e conversão
- **Perfis de Usuário**: Sistema de login e preferências

### Integrações Comerciais
- **Parcerias**: Sistema de API para lojas parceiras
- **Pagamentos**: Gateway de pagamento para compras com créditos
- **Campanhas**: Dashboard para anunciantes gerenciarem propagandas

## Considerações Técnicas

### Performance
- **Carregamento Lazy**: Vídeos de propaganda são carregados apenas quando necessário
- **Otimização de Mídia**: Uso de formatos comprimidos para áudio e vídeo
- **Cache Inteligente**: Reutilização de recursos já carregados

### Experiência do Usuário
- **Feedback Visual**: Indicadores claros de progresso e recompensas
- **Controle do Usuário**: Possibilidade de pausar e controlar a reprodução
- **Design Responsivo**: Funciona em dispositivos móveis e desktop

### Segurança
- **Validação**: Verificação de integridade dos arquivos de mídia
- **Sanitização**: Prevenção contra XSS em conteúdos dinâmicos
- **Rate Limiting**: Controle de frequência de ganho de créditos

## Licença

Este projeto foi desenvolvido como demonstração técnica e está disponível para uso educacional e comercial.

---

**Desenvolvido por:** Manus AI  
**Data:** Outubro 2024  
**Versão:** 1.0.0
