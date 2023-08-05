# ✔️ Vuct Validator

A library that provides validation to form fields, supporting reactivity of Vue 3 and React. You can use the validators that we already provides or you can create your own validator class. (maybe share with us too?)

### 🚀 How to use

First, you will need to install the package from npm.

```bash
npm install vuct-validator
# or (if you are using yarn)
yarn add vuct-validator
```

#### Vue 3 (Vue 2 not tested yet)

```typescript
<script setup lang="ts">
import { withCredentials } from "vuct-validator/vue";
import { EmailValidator } from "vuct-validator/validators";

  const errorHandler = (error: ValidationError | null) => {
    console.log({ error });
  };

  const rules = {
    email: {
      validators: [new EmailValidator()],
    },
  };

  const state = withValidator(reactive({email: ""}), rules, errorHandler);
</script>
```

#### React

```typescript
import { useValidatedState } from "vuct-validator/react";
import { EmailValidator } from "vuct-validator/validators";

function Login() {
  const errorHandler = (error: ValidationError | null) => {
    console.log({ error });
  };

  const rules = {
    email: {
      validators: [new EmailValidator()],
    },
  };

  const emailState = useValidatedState(
    { name: "email", value: "" },
    rules.email,
    errorHandler
  );
}
```

## ✨ How to contribute

First of all, you'll need to clone this repository and create a new branch from the main.

```bash
git clone https://github.com/https-eduardo/vuct-validator.git

git checkout -b your_branch_name
```

After cloning the repository, you can start implementing your features, fixing the code or refactoring.
When your changes are finished, open a pull request to be reviewed and, then, merged.

**📍 TIP:** Adding new validator classes are necessary and good contribution.
