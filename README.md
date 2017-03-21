# ReboucasMask

### Docs
[![Language-pt_BR](https://img.shields.io/badge/pt__BR-100%25-green.svg)](https://github.com/GabrielReboucas/reboucasMask/blob/master/LEIA-ME.md)

## Install the package: 
 ```javascript
 npm install reboucas-mask --save
 ```

## Import reboucas-mask Module:
  ```typescript
  import { ReboucasMaskModule } from './reboucasMask/reboucasMask.module';
  ```

## Import module dependency:
  ```typescript
  imports: [
   ...
    ReboucasMaskModule
   ...
   ]
   ```

## Use reboucas-mask directive:

 ```typescript
 <input type='text' reboucasMask='(99) 9999-9999'/>
 ```